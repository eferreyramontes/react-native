import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/suggestion-list-layout';

class SuggestionList extends Component {
    render() {
        const list = [
            {
                title: 'emma',
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
                    renderItem={({item}) =>
                    <Text>{item.title}</Text>
                }
                />
            </Layout>
        )
    }
}

export default SuggestionList;