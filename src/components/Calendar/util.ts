import moment from "moment";
/**
 * @func 根据日期得到本月的日历数据
 * @param date 可以被moment初始化的时间
 * @return 由年月日组成的日历时间
 */
// eslint-disable-next-line import/prefer-default-export
export const getDays = (date: any) => {
  const curDate = moment(date).endOf("month");
  const curLastDay = curDate.date();
  const firstWeekDay = moment(date).startOf("month").day();
  const firstWeekDayIsSun = firstWeekDay === 0; // 第一天是否为星期天，如果是星期六就要补一行
  const preLastDay = moment(date).subtract(1, "month").endOf("month").date();
  const curMonth = moment(date).month();
  const preMonth = moment(date).subtract(1, "month").month();
  const nextMonth = moment(date).add(1, "month").month();
  const curYear = moment(date).year();
  const preYear = moment(date).subtract(1, "month").year();
  const nextyear = moment(date).add(1, "month").year();
  let diff = firstWeekDayIsSun ? -6 : 1 - firstWeekDay;
  const days: any[] = [];
  for (let week = 0; week < 6; week++) {
    days[week] = [];
    for (let day = 0; day < 7; day++) {
      if (diff <= 0) {
        days[week][day] = {
          day: diff + preLastDay,
          month: preMonth,
          year: preYear,
          date: `${preYear}-${preMonth + 1}-${diff + preLastDay}`
        };
      } else if (diff > curLastDay) {
        days[week][day] = {
          day: diff - curLastDay,
          month: nextMonth,
          year: nextyear,
          date: `${nextyear}-${nextMonth + 1}-${diff - curLastDay}`
        };
      } else {
        days[week][day] = {
          day: diff,
          month: curMonth,
          year: curYear,
          date: `${curYear}-${curMonth + 1}-${diff}`
        };
      }
      diff += 1;
    }
  }
  return days;
};
