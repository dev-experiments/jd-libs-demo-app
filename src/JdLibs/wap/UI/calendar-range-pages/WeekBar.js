import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WeekBar.css';

class WeekBar extends Component {
    static defaultProps = {
        type: 'd',
        weekStartDay: 'S',
    }
    static propTypes = {
        type: PropTypes.oneOf(['d', 'dd', 'ddd']),
        weekStartDay: PropTypes.oneOf(['S', 'M']),
    }

    constructor(props) {
        super(props);
        this.weekDays = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
        this.weekDaysFormat = { d: 1, 'dd': 3, 'ddd': -1 };
    }

    weekFormat(type) {
        if(this.props.weekStartDay === 'M'){
            this.changeStartDay();
        }
        const len = this.weekDaysFormat[type];
        return this.weekDays.map((item, index) => (
            <li key={index} >{item.slice(0, len)}</li>
        ));
    }

    changeStartDay(){
        const sun = this.weekDays.shift();
        this.weekDays.push(sun);
    }

    render() {
        const weekList = this.weekFormat(this.props.type);
        return (
            <div>
                <ul className="weekdy">
                    {weekList}
                </ul>
            </div>
        );
    }
}

export default WeekBar;