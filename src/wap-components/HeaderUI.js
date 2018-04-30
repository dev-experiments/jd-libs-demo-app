import React, { Component } from 'react';
import MainHeader from './../JdLibs/wap/UI/headers/MainHeader';

class HeaderUI extends Component {
    headerOptions (){
        let opt = {};
        opt.title_callback = () => alert('title called');
        opt.back_callback = () => alert('back called');
        opt.rightLink_label = 'Close';
        opt.rightLink_callback = () => alert('right link called');
       // opt.back_label = 'Back';
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