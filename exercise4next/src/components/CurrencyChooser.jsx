'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// mostly the same as BitcoinRates, but without data fetching as this is done by server components
function CurrencyChooser({defaultCurrency}) {

    const [currency, setCurrency] = useState(defaultCurrency);
    const router = useRouter(); // next.js hook for client side navigation
    const path = usePathname(); // next.js hook for determining the current path

    const handleChange = (e) => {
        setCurrency(e.target.value);
        router.replace(path + '?currency=' + e.target.value) // trigger navigation including the chosen currency value as a query parameter
        // why router.replace? router.push adds a new history state, so going 'back' would go through multiple currency selections
    }

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>)

    return (
        <div className="CurrencyChooser componentBox">
            <label>Choose currency:
                <select value={currency} onChange={handleChange}>
                    {options}
                </select>
            </label>
        </div>
    )

}

export default CurrencyChooser;