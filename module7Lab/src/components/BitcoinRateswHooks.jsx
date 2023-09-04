// Exercise 7.2.1

import React, { useState } from 'react';
import useFetchBitcoinRates from '../hooks/useFetchBitcoinRates';          // Import the custom hook

import { useEmojiContext } from '../context/EmojiContext';



const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRateswHooks() {

    const { isHappy } = useEmojiContext();

    const [currency, setCurrency] = useState(currencies[0]);
    const { bitcoinPrice, error } = useFetchBitcoinRates(currency);             // Use the custom hook


    // Create options for the select element
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    
    return (
        <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
         
         {/* Exercise 7.3.2 */}
        <div>Current Mood: <span role="img" aria-label="emoji">{isHappy ? '😀' : '😞'}</span></div>
                         
        <label>Choose currency:
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
            {options}
            </select>
        </label>
        {bitcoinPrice !== null ? <div>Current rate: {bitcoinPrice} {currency}</div> : null}
        {error && <div>{error}</div>}
        </div>
    );
}

export default BitcoinRateswHooks;
