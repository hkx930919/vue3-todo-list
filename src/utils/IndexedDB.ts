/**
 * @author 胡可熊
 * @email hukexiong@banksteel.com
 * @create date 2020-09-14 08:41:01
 * @modify date 2020-09-14 08:41:01
 * @desc [description]
 */
import {DB_NAMES, OBJECT_STORE_NAMES} from "@/constant";

interface TransactionOptions {
  storeName?: string;
  mode?: IDBTransactionMode;
  success?: (data: any) => any;
  error?: (data: any) => any;
}
class IndexedDB {
  db: any | IDBDatabase;

  dbName: string;

  objectStore?: IDBObjectStore;

  objectStoreName: string;

  constructor(dbName = DB_NAMES.todoList, objectStoreName = OBJECT_STORE_NAMES.todoListStore, version?: number) {
    this.objectStoreName = objectStoreName;
    this.dbName = dbName;
    this.init(dbName, version);
  }

  private async init(dbName: string, version?: number) {
    const db = await this.openDb(dbName, version);
    this.db = db;
    this.createStore(OBJECT_STORE_NAMES.todoListStore);
  }

  /**
   * @func 连接数据库
   * @param dbName 数据库名称
   * @param version
   */
  // eslint-disable-next-line class-methods-use-this
  openDb(dbName: string, version?: number): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(dbName, version);
      request.onerror = e => {
        console.error(`错误：连接${dbName}-indexedDB出错`, e);
        reject(e);
      };
      request.onsuccess = (e: any) => {
        console.log("---openDb onsuccess", e);

        resolve(e.target.result);
      };
      request.onupgradeneeded = (e: any) => {
        console.log("---openDb onupgradeneeded", e);
        resolve(e.target.result);
      };
    });
  }

  /**
   * @func 创建事务并读取一个对象仓库
   * @param {TransactionOptions} options
   * @return objectStore 对象仓库
   */
  private getObjectStore(options: TransactionOptions = {}) {
    const {storeName = this.objectStoreName, mode} = options;
    this.createStore(storeName);
    const transaction = this.db.transaction(storeName, mode);
    transaction.oncomplete = (e: any) => {
      console.log("新增数据事务执行完毕", storeName, e);
    };

    transaction.onerror = (e: any) => {
      // 不要忘记错误处理！
      console.error("新增数据事务执行出错", storeName, e);
    };
    const objectStore = transaction.objectStore(storeName);
    return objectStore;
  }

  /**
   * @func 获取数据库，数据库不存在时就新建，存在时就获取
   * @param storeName 数据库名称
   * @param options 创建数据库选项
   */
  async createStore(storeName: string, options: object = {autoIncrement: true}): Promise<IDBObjectStore | undefined> {
    if (!this.db) {
      console.warn("请先连接数据库");
      return;
    }
    this.objectStoreName = storeName;
    if (!this.db.objectStoreNames.contains(storeName)) {
      const objectStore = this.db.createObjectStore(storeName, options);
      this.objectStore = objectStore;
      // eslint-disable-next-line consistent-return
      return objectStore;
    }
  }

  /**
   * @func 新增数据
   * @param data
   * @param options
   * @return Promise新增成功后的event
   */
  add(data: any, options: TransactionOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const {success, error} = options;
      const objectStore = this.getObjectStore({...options, mode: "readwrite"});
      const request = objectStore.add(data);
      request.onsuccess = (e: any) => {
        success && success(e);
        resolve(e);
      };
      request.onerror = (e: any) => {
        error && error(e);
        reject(e);
      };
    });
  }

  /**
   * @func 删除数据
   * @param data
   * @param options
   * @return Promise删除成功后的event
   */
  delete(data: unknown, options: TransactionOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const {success, error} = options;
      const objectStore = this.getObjectStore({...options, mode: "readwrite"});
      const request = objectStore.delete(data);
      request.onsuccess = (e: any) => {
        success && success(e);
        resolve(e);
      };
      request.onerror = (e: any) => {
        error && error(e);
        reject(e);
      };
    });
  }

  /**
   * @func 获取数据
   * @param data
   * @param options
   * @return Promise
   */
  get(data?: any, options: TransactionOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const {success, error} = options;
      const objectStore = this.getObjectStore({...options, mode: "readonly"});
      const request = objectStore.get(data);
      request.onsuccess = (e: any) => {
        success && success(e);
        resolve(e);
      };
      request.onerror = (e: any) => {
        error && error(e);
        reject(e);
      };
    });
  }

  /**
   * @func 修改数据
   * @param  data
   * @param options
   * @return Promise
   */
  put(data: {get: any; put: any}, options: TransactionOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      const {success, error} = options;
      const objectStore = this.getObjectStore({...options, mode: "readwrite"});
      const {get, put: newData} = data;
      const getRequest = objectStore.get(get);
      getRequest.onsuccess = (e: any) => {
        const putRequest = objectStore.put({...e.target.result, ...newData});
        putRequest.onerror = (event: any) => {
          error && error(event);
          reject(event);
          // 错误处理
        };
        putRequest.onsuccess = (event: any) => {
          // 完成，数据已更新！
          success && success(event);
          resolve(event);
        };
      };
      getRequest.onerror = (e: any) => {
        error && error(e);
        reject(e);
      };
    });
  }
}

export default IndexedDB;
