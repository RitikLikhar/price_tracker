// HomeViewModel.js
import { useState, useEffect } from 'react';
import { fetchCryptocurrencyPrices } from '../config/Constants';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Sizes, colors } from '../assets/Styles';
import MyHeader from '../components/MyHeader';
import Card from '../components/Card';

const data =
{
    "bitcoin": {
        "last_updated_at": 1708524468,
        "usd": 51121,
        "usd_24h_change": -2.7072218805086803,
        "usd_24h_vol": 31802499790.618546
    },
    "cardano": {
        "last_updated_at": 1708524465,
        "usd": 0.589739,
        "usd_24h_change": -7.083232192970468,
        "usd_24h_vol": 692596539.8325211
    },
    "chainlink": {
        "last_updated_at": 1708524467,
        "usd": 18.44,
        "usd_24h_change": -5.578288517754644,
        "usd_24h_vol": 612580693.7385724
    },
    "dogecoin": {
        "last_updated_at": 1708524466,
        "usd": 0.083326,
        "usd_24h_change": -4.745725504495516,
        "usd_24h_vol": 630030162.4530123
    },
    "ethereum": {
        "last_updated_at": 1708524464,
        "usd": 2905.24,
        "usd_24h_change": -2.600531878398951,
        "usd_24h_vol": 22446531912.95171
    },
    "polkadot": {
        "last_updated_at": 1708524471,
        "usd": 7.35,
        "usd_24h_change": -6.7837598308882185,
        "usd_24h_vol": 344175741.31636775
    },
    "solana": {
        "last_updated_at": 1708524468,
        "usd": 103.02,
        "usd_24h_change": -6.129319602352099,
        "usd_24h_vol": 2792464872.7073994
    },
    "tether": {
        "last_updated_at": 1708524325,
        "usd": 1,
        "usd_24h_change": 0.5916800860865561,
        "usd_24h_vol": 54168650287.9331
    },
    "tron": {
        "last_updated_at": 1708524465,
        "usd": 0.139121,
        "usd_24h_change": 1.093841178384181,
        "usd_24h_vol": 617531148.7009356
    }
}

export const Home = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchCryptocurrencyPrices();
                setPrices(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching cryptocurrency prices:', error);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <MyHeader title="Crypto Currency" />
            {prices != null ?
                (
                    <FlatList
                        data={prices != null ? Object.keys(prices) : []}
                        renderItem={({ item }) => {
                            const { usd, usd_24h_change, last_updated_at } = prices[item];
                            const symbol = `../assets/images/symbols/${item}.png`;
                            return (
                                <Card price={usd}
                                    percentage={usd_24h_change}
                                    title={item}
                                    symbol={symbol}
                                    lastUpdate={last_updated_at} />
                            )
                        }
                        }
                        contentContainerStyle={{ padding: Sizes.fixpadding }}
                        keyExtractor={item => item}
                    />)
                :
                <View style={{
                    flex: 0.9,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                        No data found.
                        {"\n"}
                        Please Wait for a minute.
                    </Text>
                </View>
            }
        </View>
    )

};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    }
})