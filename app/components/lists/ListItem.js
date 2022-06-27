import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import  {Swipeable, GestureHandlerRootView}  from 'react-native-gesture-handler';

import colors from '../../config/colors';
import AppText from '../AppText';

function ListItem({image, title, subTitle, onPress, IconComponent, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}
                >
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}> {title} </AppText>
                        {subTitle && <AppText style={styles.subTitle}> {subTitle} </AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailContainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
        fontSize: 17
    },
    title: {
    fontWeight: '600'
    }
})

export default ListItem;