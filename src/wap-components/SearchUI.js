import React, { Component } from 'react';
import SearchPage from './../JdLibs/wap/UI/pages/SearchPage';

class SearchUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_result_items: this.searchResultItems()
        };
    }

    searchOptions() {
        return {
            placeholder: 'Thats a search Title',
            search_item_callback: () => { alert('search item called') },
            search_keyUp_callback: () => { this.updateResult()}
        };
    }
    searchResultItems() {
        return [{
            title: 'my recent serr ',
            items: [{
                text: 'Bangalore',
                sub_text: 'Indiiiaa',
                link: '',
            },
            {
                text: 'mumbai',
                sub_text: 'India',
                link: '',
            }]
        }];
    }
    headerOptions() {
        return {
            title_callback: () => alert('title called'),
            back_label: '',
            back_callback: () => alert('back called'),
            rightLink_label: 'Closee',
            rightLink_callback: () => alert('right link called'),
        };
    }
    updateResult() {
        this.setState({
            search_result_items: [{
                title: 'newww ',
                items: [{
                    text: 'tttttt',
                    sub_text: 'Indiiiaa',
                    link: '',
                },
                {
                    text: 'yyyyyyyy',
                    sub_text: 'India',
                    link: '',
                }]
            }]
        },() => {
            console.log('updateResult');
        });

    }
    render() {
        return (
            <div className="wrpr">
                <SearchPage title="my search title" searchResultItems={this.state.search_result_items} searchOptions={this.searchOptions()} headerOptions={this.headerOptions()} />
            </div>
        );
    }
}

export default SearchUI;