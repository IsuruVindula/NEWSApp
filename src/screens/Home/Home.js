import React from 'react';
import {ArticleCards} from '../../components';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        alignItems: 'center'
    },
});

const Home = () => {
    return (
        <View style={styles.container}>
            <ArticleCards imageUrl="image" title="title" source="asdsdf" published="2020-06-03T00:52:00z"  />
        </View>
    )
}

export default Home;

