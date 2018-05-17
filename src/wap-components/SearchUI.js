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
            searchInputChangeCallback: () => { this.updateResult() },
            searchItemLabels: { text: 'city', sub_text: 'country' },
            clearSearchInputCallback: (e) => { alert('clear')}
        };
    }
    searchResultItems() {
        return [{
            title: 'my recent serr ',
            items: [{
                id: 101,
                city: 'Mumbai',
                country: 'Indiaa',
            },
            {
                id: 102,
                city: 'ssss',
                country: 'Indiaa',
            }]
        }];
    }
    updateResult() {
        this.setState({
            searchItems: [{
                title: 'newww ',
                items: [{
                    city: 'tttttt',
                    country: 'Indiiiaa',
                },
                {
                    city: 'yyyyyyyy',
                    country: 'India',
                }]
            }]
        }, () => {
            console.log('updateResult');
        });

    }
    render() {
        return (
            <div className="wrpr">
                <SearchPage searchItems={this.state.searchItems} searchInput="" searchOptions={this.searchOptions()} />
            </div>
        );
    }
}

export default SearchUI;