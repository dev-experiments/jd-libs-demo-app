import MonthClass from './MonthClass';

class CalendarClass {

    constructor(s, e) {

        if (this.isValidDate(s) && this.isValidDate(e)) {
            this.startDate = s;
            this.endDate = e;
        } else {
            console.log('Invalid Dates');
        }
        this.months = [];
        /* this.currentDate = new Date();

        if (this.isValidDate(d)) {
            this.baseDate = new Date(d);
        } else {
            this.baseDate = this.currentDate;
        }
        this.calendar = {
            daysOrder: [0, 1, 2, 3, 4, 5, 6],
            daysInMonths: this.getDaysInMonths(this.baseDate.getFullYear()),
        }; */
    }


    generateMonths() {
        // console.log('1', this.startDate);        console.log('2', this.endDate);
        if(this.months.length === 0){

        }
        for (let i = 0; i < 12; i++) {
            let date = new Date();
            date.setDate(1);
            date.setMonth(date.getMonth() + i);
            this.months.push(new MonthClass(date));
        }
        return this.months;
        /*  const month = this.startDate.getMonth();
         const year = this.startDate.getFullYear();
         this.months = new MonthClass(month, year); */
        // this.generateMonth(month, year);

        // new MonthClass(month, year);
    }

    getFullMonth(month) {
        return MonthClass.getFullMonth(month);
    }
    /*  generateMonth(month, year) {
         const m = new MonthClass(month, year); console.log(m);
         return m;
     } */

    isValidDate(d) {
        return Object.prototype.toString.call(d) === "[object Date]" && !isNaN(d.getTime());
    }

}

export default CalendarClass;