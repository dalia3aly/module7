// Exercise 7.2

import { useReducer, useEffect } from 'react';


const bitcoinRatesReducer = (state, action) => {                       // Exercise 7.2.2
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, bitcoinPrice: action.payload, error: null };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: 'Failed to fetch data', bitcoinPrice: null };
        default:
            throw new Error('Invalid action type');
    }
};

function useFetchBitcoinRates(currency) {
  const [state, dispatch] = useReducer(bitcoinRatesReducer, {
    loading: false,
    bitcoinPrice: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: 'FETCH_INIT' });

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then(response => response.json())
      .then(data => {
            if (isMounted) {
                dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency.toLowerCase()] });
            }
      })
      .catch(err => {
            if (isMounted) {
                dispatch({ type: 'FETCH_ERROR' });
            }
      });

    return () => {
        
      isMounted = false;
    };

  }, [currency]);

  return { ...state };

}

export default useFetchBitcoinRates;
