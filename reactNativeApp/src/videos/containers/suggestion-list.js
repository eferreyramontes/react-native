import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/separator';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="There are no suggestions for you :("/>

    listSeparator = () => <Separator color="red"/>

    render() {
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'nuel',
                key: '2'
            }
        ]
        return (
            <Layout title="Suggestions for you">
                <FlatList
                    data={list}
                    ItemSeparatorComponent={this.listSeparator}
                    ListEmptyComponent={this.renderEmpty}
                    renderItem={({item}) =>
                    <Text>{item.title}</Text>
                }
                />
            </Layout>
        )
    }
}

export default SuggestionList;