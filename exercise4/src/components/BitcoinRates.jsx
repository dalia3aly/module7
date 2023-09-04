import React, { useState } from 'react';
import useFetchBitcoinRates from '../hooks/useFetchBitcoinRates'; // Import the custom hook
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { bitcoinPrice, error, loading } = useFetchBitcoinRates(currency); // Use the custom hook

  // Create options for the select element
  const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
  
  return (
    
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {loading && <div>Loading...</div>}
      {bitcoinPrice !== null ? <div>Current rate: {bitcoinPrice} {currency}</div> : null}
      {error && <div>{error}</div>}
    </div>
  );
}

export default BitcoinRates;
