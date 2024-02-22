import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors } from '../assets/Styles';
import { CommonActions } from '@react-navigation/native';

const Splash = ({ navigation }) => {

    const logoHeight = useSharedValue(0);
    const textOpacity = useSharedValue(0);

    useEffect(() => {
        startLogoAnimation();
        setTimeout(() => {
            startTextAnimation();
        }, 1500);
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'home',
                        },
                    ],
                }),
            );
        }, 3500);
    }, []);

    const startLogoAnimation = () => {
        logoHeight.value = withTiming(1, {
            duration: 1500,
            easing: Easing.linear,
        });
    };

    const startTextAnimation = () => {
        textOpacity.value = withTiming(1, {
            duration: 1500,
            easing: Easing.linear,
        })
    };

    const gradientColors = [colors.primaryLight, colors.primary];

    const animatedLogoStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: logoHeight.value }],
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: textOpacity.value,
            transform: [
                {
                    translateY: SCREEN_HEIGHT * (1 - textOpacity.value),
                },
            ],
        };
    });

    return (
        <LinearGradient colors={gradientColors} style={styles.container}>
            <Animated.View style={[styles.logoContainer, animatedLogoStyle]}>
                <View style={styles.logobox}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                    />
                </View>
            </Animated.View>
            <Animated.View style={[styles.logoContainer, animatedTextStyle]}>
                <Text style={styles.textStyle}>Price Tracker</Text>
            </Animated.View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logobox: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_WIDTH * 0.3,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    textStyle: {
        fontSize: 20,
        marginTop: 5,
        color: colors.white_color,
        fontFamily: 'Calistoga-Regular',
    },
});

export default Splash;

