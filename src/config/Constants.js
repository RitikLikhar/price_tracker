// CryptocurrencyModel.js
import axios from 'axios';

const API_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = 'CG-vEDkXS5c28xj5eDB9PxWP7s3';

export const fetchCryptocurrencyPrices = async () => {
    try {
        const response = await axios.get(`${API_URL}/simple/price`, {
            params: {
                ids: 'bitcoin,tether,maker,beam,thorchain,algorand,tos,solana,dai,polygon,cardano,polkadot,wrapped bitcoin,ton,avalanche,tron,dogecoin,chainlink,polkadot,polygon,dogecoin,bittensor',
                vs_currencies: 'usd',
                include_market_cap: false,
                include_24hr_vol: false,
                include_24hr_change: true,
                include_last_updated_at: true,
                api_key: API_KEY
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
        return null;
    }
};
