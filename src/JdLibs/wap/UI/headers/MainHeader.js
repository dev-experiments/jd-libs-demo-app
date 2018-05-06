import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainHeader.css';

class MainHeader extends Component {
    static defaultProps = {
        title: null, // required 
        options: {
            title_callback: () => { },
            back_label: '',
            back_callback: () => { },
            rightLink_label: '',
            rightLink_callback: () => { }
        }
    }
     constructor(props) {
        super(props);
        this.backButtonClickHandle = this.backButtonClickHandle.bind(this);
        this.rightLinkClickHandle = this.rightLinkClickHandle.bind(this);
        this.titleClickHandle = this.titleClickHandle.bind(this);
    } 
   
    backButtonClickHandle() {
        if (this.props.options.back_callback) {
            this.props.options.back_callback();
        }
    }
    titleClickHandle() {
        if (this.props.options.title_callback) {
            this.props.options.title_callback();
        }
    }
    backButton(label) {
        let ui = '';
        if (label) {
            ui = <span className="backSpan" onClick={this.backButtonClickHandle} > <span className="bcktxt">{label}</span></span>;
        } else {
            ui = <span className="icon-back-arrow backdiv" onClick={this.backButtonClickHandle} ></span>;
        }
        return ui;
    }
    rightLink(label) {
        return (label) ? <span className="hdrclstxt" onClick={this.rightLinkClickHandle} >{label}</span> : '';
    }
    rightLinkClickHandle() {
        if (this.props.options.rightLink_callback) {
            this.props.options.rightLink_callback();
        }
    }
    render() {
        return (
            <div className='headersection'>
                {this.backButton(this.props.options.back_label)}
                <span onClick={this.titleClickHandle} >{this.props.title}</span>
                {this.rightLink(this.props.options.rightLink_label)}
            </div>
        );
    }
}

MainHeader.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.shape({
        title_callback: PropTypes.func,
        back_callback: PropTypes.func,
        back_label: PropTypes.string,
        rightLink_label: PropTypes.string,
        rightLink_callback: PropTypes.func
    }),
};

export default MainHeader;