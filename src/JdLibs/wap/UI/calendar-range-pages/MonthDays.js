import React, { Component } from "react";
import PropTypes from "prop-types";
import MonthClass from "./../../../classes/date-time/MonthClass";

import "./MonthDays.css";

class MonthDays extends Component {
  static defaultProps = {
    weekStartDay: "S"
  };
  static propTypes = {
    weekStartDay: PropTypes.oneOf(["S", "M"]),
    month: PropTypes.instanceOf(MonthClass).isRequired
  };

  constructor(props) {
    super(props);
    this.weekDays = [0, 1, 2, 3, 4, 5, 6]; // start from sunday
  }

  componentWillMount() {
    this.month = MonthClass.getFullMonth(this.props.month);
    // console.log('this.componentWillMount', month[5]['date']);
   // console.log("month", this.month);
    if (this.props.weekStartDay === "M") {
      this.changeStartDay();
    }
    // console.log('week', this.weekDays);
  }
  weekFormat() {
    if (this.props.weekStartDay === "M") {
      this.changeStartDay();
    }
  }
  changeStartDay() {
    const sun = this.weekDays.shift();
    this.weekDays.push(sun);
  }

  render() {
    const createTd = (key, value, cls) => {
      return cls ? (
        <td key={key} className={cls}>
          <a>{value} </a>
        </td>
      ) : (
        <td key={key}>
          <a>{value} </a>
        </td>
      );
    };
   
    const oneRow = (key, data) => {
      return <tr key={key}>{data}</tr>;
    };
    const emptyDates = count => {
      let days = [];
      for (let i = 1; i <= count; i++) {
        //  days.push(<td key={i} >&nbsp;</td>);
        days.push(createTd("nodate_" + i, "\u00A0"));
      }
      return days;
    };

    const allRows = (() => {
      let firstItemIndex = this.month[0]["weekDay"]["index"];
      const emptydates = emptyDates(this.weekDays.indexOf(firstItemIndex));
      let sevenDays = emptydates;
      let allRows = [];

      for (let i = 0; i < this.month.length; i++) {
        const item = this.month[i];
        const rowID = `row${i}`;
        
        sevenDays.push(createTd(item.id, item.day));

        if (sevenDays.length === 7) {
          allRows.push(oneRow(rowID, sevenDays));
          //console.log("allRows1=>", allRows);
          sevenDays = [];
        } else if (this.month.length === i + 1 && sevenDays.length < 7) {
          let lastItemIndex = item.weekDay.index;
          const emptydates = emptyDates(
            6 - this.weekDays.indexOf(lastItemIndex)
          );
          sevenDays.push(emptydates);
          allRows.push(oneRow(rowID, sevenDays));
          //console.log("allRows1=>", allRows);
          sevenDays = [];
        }

        //console.log("sevenDays --> ", sevenDays);
      }

      return allRows;
    })();

    return (
      
        <div className="Cutm_datepicker">
          <div className="date-header">{this.props.children}</div>

          <table
            className="date-calendar"
            width="100%"
            cellPadding="0"
            cellSpacing="0"
          >
            <tbody>{allRows}</tbody>
          </table>
        </div>
    );
  }
}

export default MonthDays;
