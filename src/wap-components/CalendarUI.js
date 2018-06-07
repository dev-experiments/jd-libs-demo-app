import React, { Component } from "react";
import CalendarRangePage from "./../JdLibs/wap/UI/calendar-range-pages/CalendarRangePage";

class CalendarUI extends Component {
  /*  constructor(props) {
         super(props);
      
     } */
  options() {
    return {
      firstCal: {
        title: "CheckIn",
        date: "Fri, 01 Jun 2018",
        format: ""
      },
      secondCal: {
        title: "CheckOut",
        date: "Fri, 01 Jun 2018",
        format: ""
      },
      weekHeaderType: "d",
      weekStartDay: "S"
    };
  }

  render() {
    return <CalendarRangePage {...this.options()} />;
  }
}

export default CalendarUI;
