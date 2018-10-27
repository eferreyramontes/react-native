import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="There are no suggestions for you :("/>
    listSeparator = () => <Separator color="red"/>
    renderItem = (item) => {
        return (
            <Suggestion {...item}/>
        );
    }

    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1',
                year: 2010
            },
            {
                title: 'Avengers 2',
                key: '2',
                year: 2012
            }
        ]
        return (
            <Layout title="Suggestions for you">
                <FlatList
                    data={list}
                    ItemSeparatorComponent={this.listSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default SuggestionList;