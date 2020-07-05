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
            <ArticleCards imageUrl="image" title="title" source="asdsdf" publishedAt="pass time stamp"/>
        </View>
    )
}

export default Home;

