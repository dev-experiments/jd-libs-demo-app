import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalendarTabs.css';

class CalendarTabs extends Component {
    static defaultProps = {
        firstCal: {
            title: '',
            date: '',
            format: ''
        },
        secondCal: {
            title: '',
            date: '',
            format: ''
        },
    }
    static propTypes = {
        firstCal: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            format: PropTypes.string
        }),
        secondCal: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            format: PropTypes.string
        }),
    }

    /* constructor(props) {
        super(props);
        this.state = {
            searchInput: this.props.searchInput
        }
        this.searchInputOnChange = this.searchInputOnChange.bind(this);
        this.clearTextHandle = this.clearTextHandle.bind(this);
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
    } */

    render() {
        return (
            <div>
                <span className="slcatg">
                    {this.props.firstCal.title}
                    <input className="" type="text" placeholder="Select Date" defaultValue={this.props.firstCal.date} disabled="" />
                </span>
                <span className="slcatg">
                    {this.props.secondCal.title}
                    <input className="active" type="text" placeholder="Select Date" defaultValue={this.props.firstCal.date} disabled="" />
                </span>
            </div>
        );
    }
}

export default CalendarTabs;