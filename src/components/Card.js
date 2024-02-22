import { View, Text, Image, StyleSheet } from "react-native";
import { SCREEN_WIDTH, Sizes, colors } from "../assets/Styles";
import moment from "moment";


const Card = ({ title, price, percentage, lastUpdate, symbol }) => {
    const currentTime = moment();
    const lastUpdateTime = moment.unix(lastUpdate);
    const differenceTime = moment.duration(currentTime.diff(lastUpdateTime));

    let result = '';
    if (differenceTime.asSeconds() < 60) {
        result = `${Math.round(differenceTime.asSeconds())} sec ago`;
    } else if (differenceTime.asMinutes() < 60) {
        result = `${Math.round(differenceTime.asMinutes())} min ago`;
    } else if (differenceTime.asHours() < 24) {
        result = `${Math.round(differenceTime.asHours())} hours ago`;
    } else {
        result = lastUpdateTime.format('YYYY-MM-DD HH:mm:ss');
    }

    return (
        <View key={title} style={styles.cardContainer}>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                width: '50%'
            }}>
                {symbol &&
                    <Image
                        source={require('../assets/images/symbols/bitcoin.png')}
                        style={styles.symbol}
                    />
                }
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ width: '30%' }}>
                <Text style={styles.price}>${price.toFixed(2)}
                </Text>
            </View>
            <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <Text style={{ ...styles.percentage, color: percentage > 0 ? colors.green : colors.red }}>
                    {percentage >= 0 ? '+' : ''}{percentage.toFixed(2)}%
                </Text>
                <Text style={styles.lastUpdate}>
                    {result}
                </Text>
            </View>
        </View >
    );
}
export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white_color,
        justifyContent: 'space-between',
        padding: Sizes.fixpadding,
        marginBottom: Sizes.fixpadding,
        borderRadius: Sizes.fixpadding,
        elevation: 10,
        shadowColor: 'white'
    },
    symbol: {
        width: SCREEN_WIDTH * 0.08,
        height: SCREEN_WIDTH * 0.08,
        marginRight: SCREEN_WIDTH * 0.02,
        resizeMode: 'contain'
    },

    title: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.black,
        textTransform: 'capitalize'
    },
    price: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.primaryLight,
        textTransform: 'capitalize'
    },
    percentage: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.primaryLight,
        textTransform: 'capitalize'
    },
    lastUpdate: {
        color: colors.black,
        fontSize: 10
    }




})