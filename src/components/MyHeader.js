import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH, Sizes, colors } from '../assets/Styles';

const MyHeader = ({ title, type, navigation }) => {
    return (
        <View style={styles.container}>
            {type == 'back' ?
                (<TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../assets/images/back.png')} style={styles.icon} />
                </TouchableOpacity>)
                :
                (<TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/logo.png')} style={styles.icon} />
                </TouchableOpacity>)}
            <Text style={styles.titleText}>
                {title}
            </Text>
        </View>
    )
}

export default MyHeader;
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white_color,
        flexDirection: 'row',
        paddingVertical: Sizes.fixpadding,
        paddingHorizontal: Sizes.fixpadding,
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.grey_light,
        borderRadius: 50,
        marginRight: Sizes.fixpadding
    },
    icon: {
        width: SCREEN_WIDTH * 0.08,
        height: SCREEN_WIDTH * 0.08,
        resizeMode: 'contain',
    },
    titleText: {
        fontFamily: 'Calistoga-Regular',
        fontSize: SCREEN_WIDTH * 0.05,
        color: colors.black
    }
})