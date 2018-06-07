import React, { Component } from "react";
import PropTypes from "prop-types";

import CalendarClass from "./../../../classes/date-time/CalendarClass";
import WeekBar from "./WeekBar";
import CalendarTabs from "./CalendarTabs";
import MonthDays from "./MonthDays";

import "./CalendarRangePage.css";

class CalendarRangePage extends Component {
  static defaultProps = {
    weekHeaderType: "d"
  };
  static propTypes = {
    firstCal: PropTypes.shape({
      format: PropTypes.string
    })
  };

  constructor(props) {
    super(props);
    this.state = {
      searchInput: this.props.searchInput
    };
    const startDate = new Date();
    const endDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    );

    //console.log(startDate,'==' ,endDate);
    this.calendar = new CalendarClass(startDate, endDate);
  }
  componentWillMount() {
    this.calendar.generateMonths();
    //  const month = this.calendar.getFullMonth(this.calendar.months[0]);
    console.log("this.calendar", this.calendar);
    // console.log('month', month);
  }

  render() {
    // const month = this.calendar.getFullMonth(this.calendar.months[0]);
    // console.log('this.calendar', this.calendar);
    const monthsData = this.calendar.months.map((item, index) => {
        return (
          <MonthDays
            key={index}
            weekStartDay={this.props.weekStartDay}
            month={item}
          >
            <div className="date-title">
              <span className="ui-datepicker-month">{item.month.name}</span>
              &nbsp;
              <span className="ui-datepicker-year">{item.year}</span>
              <div className="htlnight">
                <span clas="day" id="numdays">
                  0
                </span>
                <span className="icon-jd_nights" />
                <span className="ngttxt" id="numnight">
                  Nights
                </span>
              </div>
            </div>
          </MonthDays>
        );
      });
    return (
      <div className="wrapcalander">
        <div id="radioDiv">
          <CalendarTabs
            firstCal={this.props.firstCal}
            secondCal={this.props.secondCal}
          />
          <WeekBar
            type={this.props.weekHeaderType}
            weekStartDay={this.props.weekStartDay}
          />
          <div className="vertical_view">
           {monthsData}
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarRangePage;
