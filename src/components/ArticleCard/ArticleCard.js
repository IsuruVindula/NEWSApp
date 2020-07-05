import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment'; //use this to calculate "timeago" value
import { COLORS } from '../../utils/constancts';


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'yellow',
        marginTop: 15
    },

    image: {
        width: '100%',
        borderRadius: 5,
        aspectRatio: 16/9,
    },
    title: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    bottomTextContainer: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        justifyContent: 'space-between',
    }
});

const ArticleCard = ({ imageUrl, title, source, publishedAt }) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: imageUrl}} StyleSheet={styles.image}/>

            <Text style={styles.title}>{title}</Text>

            <View  style={styles.bottomTextContainer}>
                <Text>{source}</Text>
                <Text>{moment(publishedAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ArticleCard;
