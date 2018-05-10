import React, { Component } from 'react';
import SearchPage from './../JdLibs/wap/UI/pages/SearchPage';

class SearchUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItems: this.searchResultItems()
        };
    }

    searchOptions() {
        return {
            placeholder: 'Thats a search Title',
            searchItemCallback: () => { alert('search item called') },
            searchKeyUpCallback: () => { this.updateResult() },
            searchItemLabels: { text: 'city', sub_text: 'country' },
        };
    }
    searchResultItems() {
        return [{
            title: 'my recent serr ',
            items: [{
                id: 101,
                city: 'Mumbai',
                country: 'Indiaa',
                link: '',
            },
            {
                id: 102,
                city: 'ssss',
                country: 'Indiaa',
                link: '',
            }]
        }];
    }
    updateResult() {
        this.setState({
            searchItems: [{
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
        }, () => {
            console.log('updateResult');
        });

    }
    render() {
        return (
            <div className="wrpr">
                <SearchPage title="my search title" searchItems={this.state.searchItems} searchOptions={this.searchOptions()} />
            </div>
        );
    }
}

export default SearchUI;