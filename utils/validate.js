
// import moment from 'moment';
/**
 *
 * @param {*} endDate: 结束日期;
 * @param {*} isIncludeToday: 是否可以选择当天;
 * @param {*} isSameDate: 结束日期和开始日期是否可以相等,默认结束日期必须大于开始日期;
 * @param {*} isSelectToday: 结束日期时间必须延后到开始日期时间4小时后，且可选当天;
 * @param {*} isDefaultDate: 是否有默认值;
 * @returns
 */

// export const startDatePickerOptions = (endDate, isIncludeToday, isSameDate, isSelectToday) => {
//   let nowDate = new Date().getTime();
//   const nowDateStr = moment().format('YYYY-MM-DD');
//   if (isIncludeToday) {
//     nowDate = new Date().getTime() - 24 * 60 * 60 * 1000;
//   }
//   return {
//     disabledDate(time) {
//       if (endDate) {
//         if (isSameDate) {
//           if (nowDateStr === endDate) {
//             return time.getTime() < nowDate;
//           }
//           return time.getTime() > new Date(endDate).getTime() || time.getTime() < nowDate;
//         }
//         if (nowDateStr === endDate) {
//           return time.getTime() < nowDate;
//         }
//         if (isSelectToday) {
//           return time.getTime() > new Date(endDate).getTime() || time.getTime() < nowDate - 8.64e7;
//         }
//         return time.getTime() > new Date(endDate).getTime() - 24 * 60 * 60 * 1000 || time.getTime() < nowDate;
//       }
//       return time.getTime() < nowDate;
//     },
//   };
// };

// /**
//  *
//  * @param {*} endDate: 结束日期;
//  * @param {*} isIncludeToday: 是否可以选择当天;
//  * @param {*} isSameDate: 结束日期和开始日期是否可以相等,默认结束日期必须大于开始日期;
//  * @param {*} isSelectToday: 结束日期时间必须延后到开始日期时间4小时后，且可选当天;
//  * @returns
//  */

// export const endDatePickerOptions = (startDate, isIncludeToday, isSameDate, isSelectToday) => {
//   let nowDate = new Date().getTime();
//   if (startDate) {
//     nowDate = new Date(startDate).getTime();
//   } else if (isIncludeToday) {
//     nowDate = new Date().getTime() - 24 * 60 * 60 * 1000;
//   }
//   return {
//     disabledDate(time) {
//       if (isSameDate) {
//         return time.getTime() < nowDate - 24 * 60 * 60 * 1000;
//       }
//       if (isSelectToday) {
//         return time.getTime() < nowDate - 8.64e7;
//       }
//       return time.getTime() < nowDate;
//     },
//   };
// };
// /**
//  *
//  * @param {*} obj.startDate: 开始限制日期;
//  * @param {*} obj.endDate: 结束限制日期;
//  * @param {*} obj.isIncludeToday: 是否可以选择当天;
//  * @param {*} obj.limitType: 限制类型; double: 开始时间和结束时间都限制，start: 只限制结束时间， end: 只限制开始时间；
//  * @param {*} obj.noSameDate: 结束日期和开始日期是否可以相等,默认结束日期和开始日期可以选同一天;
//  * @returns
//  */
// export const datePickerOption = obj => {
//   let startLimtDate = new Date().getTime();
//   let endLimtDate = new Date('2099-12-31').getTime();
//   if (obj.startDate) {
//     startLimtDate = new Date(obj.startDate).getTime();
//   } else if (obj.isIncludeToday) {
//     startLimtDate = new Date().getTime() - 24 * 60 * 60 * 1000;
//   }
//   if (obj.endDate) {
//     endLimtDate = new Date(obj.endDate).getTime();
//   } else if (obj.isIncludeToday) {
//     endLimtDate = new Date().getTime() + 24 * 60 * 60 * 1000;
//   }
//   if (obj.noSameDate) {
//     startLimtDate += 24 * 60 * 60 * 1000;
//     endLimtDate -= 24 * 60 * 60 * 1000;
//   }
//   return {
//     disabledDate(time) {
//       if (obj.limitType === 'double') {
//         return time.getTime() > endLimtDate || time.getTime() < startLimtDate;
//       }
//       if (obj.limitType === 'start') {
//         return time.getTime() < startLimtDate;
//       }
//       if (obj.limitType === 'end') {
//         return time.getTime() > endLimtDate;
//       }
//       return false;
//     },
//   };
// };

/**
 *
 * @param {*} startTime: 开始时间;
 * @param {*} endTime: 结束时间
 * @param {*} step: 步长
 * @returns
 */

export const timePickerOptions = ({ startTime = '00:00', endTime = '23:59', step = '00:01' }) => ({
  start: startTime,
  step,
  end: endTime,
});