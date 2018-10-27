import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

function Suggestion(props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image
                    style={styles.cover}
                    source={require('../../../assets/logo.png')}
                />
                <View style={styles.gender}>
                    <Text style={styles.genderText}>
                        Gender{props.gender}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Title{props.title}</Text>
                <Text style={styles.year}>Year{props.year}</Text>
                <Text style={styles.rating}>Rating{props.rating}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    left: {
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    gender: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genderText: {
        color: 'white',
        fontSize: 11,
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default Suggestion;