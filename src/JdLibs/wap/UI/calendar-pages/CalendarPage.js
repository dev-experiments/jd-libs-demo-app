import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CalendarPage.css';

class CalendarPage extends Component {
    static defaultProps = {
        searchItems: [],
       
    }
    static propTypes = {
        searchInput: PropTypes.string,
       
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
            <div >
           
            </div>
        );
    }
}

export default CalendarPage;