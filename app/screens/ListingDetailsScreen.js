import React from 'react';
import {View, Image, StyleSheet} from 'react-native'

import color from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title= "Somkene Great"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: color.secondary,
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 50
    }
})

export default ListingDetailsScreen;