import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from './AppText';
import color from '../config/colors'


function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <Image style={styles.image} source={(image)} />
                <AppText style={styles.title}> {title} </AppText>
                <AppText style={styles.subTitle}> {subTitle} </AppText>            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: color.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 10
    },
    image: {
        width: "100%",
        height: 200
    },
    subTitle: {
        color: color.secondary,
        fontWeight: "bold",
        marginTop: 5
    },
    title: {
        marginTop: 15,
    }
})

export default Card;