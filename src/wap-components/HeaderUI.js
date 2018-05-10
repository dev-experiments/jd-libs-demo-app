import React, { Component } from 'react';
import MainHeader from './../JdLibs/wap/UI/headers/MainHeader';

class HeaderUI extends Component {
    headerOptions (){
        let opt = {};
        opt.titleCallback = () => alert('title called');
        opt.backCallback = () => alert('back called');
        opt.rightLinkLabel = 'Close';
        opt.rightLinkCallback = () => alert('right link called');
       // opt.backLabel = 'Back';
        return opt;
    }
    render() {
        return (
            <div className="wrpr">
                <MainHeader title='Make This Title' options={this.headerOptions()} />
            </div>
        );
    }
}

export default HeaderUI;