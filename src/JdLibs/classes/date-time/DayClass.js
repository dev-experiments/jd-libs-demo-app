class DayClass {
  constructor(y, m, d) {
    this.date = new Date(y, m, d);
    this.setDay(this.date.getDate());
    this.setId();
    // this.setId();
  }

  setDay(n) {
    this.day = n;
    return this;
  }
  setMonth() {
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
    this.month = {
      index: this.date.getMonth(),
      name: monthNames[this.date.getMonth()]
    };
    return this;
  }
  setYear() {
    this.year = this.date.getFullYear();
    return this;
  }

  setWeekDay() {
    this.weekDay = {
      index: this.date.getDay(),
      name: this.getWeekDay(this.date.getDay())
    };
    return this;
  }
  getWeekDay(y) {
    var weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return weekday[this.date.getDay()];
  }

  setOi() {
    const n = this.day;
    this.oi =
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "");
    return this;
  }
  setId() {
    this.id = Math.round(new Date(this.date).getTime() / 1000);
    return this;
  }
}

export default DayClass;
