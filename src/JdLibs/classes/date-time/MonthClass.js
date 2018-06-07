import Day from "./DayClass";

class MonthClass {
  constructor(d) {
    this.date = new Date(d);

    this.init();
  }

  init() {
    this.month = this.getMonthName(this.date.getMonth());
    this.year = this.date.getFullYear();
    this.daysCount = this.daysInThisMonth();
  }

  static getFullMonth(monthRef) {
    let aMonth = [];
    for (let i = 1; i <= monthRef.daysCount; i++) {
      const aDay = new Day(
        monthRef.date.getFullYear(),
        monthRef.date.getMonth(),
        i
      );
      aDay
        .setWeekDay()
        .setMonth()
        .setOi()
        .setYear();
      //     console.log('=== aDay', aDay.date)
      aMonth.push(aDay);
    }
    //debugger;
    return aMonth;
  }

  daysInThisMonth() {
    return new Date(this.year, this.month.index + 1, 0).getDate();
  }

  getMonthName(m) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return {
      index: m,
      name: monthNames[m]
    };
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /*  monthGenerator() {
         for (let i = 1; i <= this.daysCount; i++) {
             this.days.push(new Day(i, this.date));
         }
     } */
}

export default MonthClass;
