// Exercise 7.1

import React, { useState, useEffect } from 'react';



const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Bolean for cleanup
    let isMounted = true;
    
    // Fetch Bitcoin rate for the selected currency
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        
        .then(data => {
        if (isMounted) {
          setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);            // Set price state
          setError(null);                                             // Reset error state
        }
      })

      .catch(error => {
        if (isMounted) {
          setError("Failed to fetch data");
          setBitcoinPrice(null);                                              // Reset price state
        }
      });

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [currency]);  
  
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
            {bitcoinPrice !== null ? 
            <div>Current rate: {bitcoinPrice} {currency}
            </div> : null}
            
            {error && <div>{error}</div>}

        </div>
    );
}

export default BitcoinRates;
