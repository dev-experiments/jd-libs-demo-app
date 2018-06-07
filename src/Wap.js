import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Wap.css';

class Wap extends Component {
    render() {
        return (
            <div className="wrpr">
                <div className="wrpr">
                    <h3>List of Wap UI components </h3>
                </div>
                <div className="wrpr">
                    <ul className="compList nav navbar-nav">
                        <li><Link to="/wap/header">Header</Link></li>
                        <li><Link to="/wap/search-page">Search Page</Link></li>
                        <li><Link to="/wap/calendar-page">Calendar Page</Link></li>
                    </ul>
                </div>

            </div>);
    }
}

export default Wap;