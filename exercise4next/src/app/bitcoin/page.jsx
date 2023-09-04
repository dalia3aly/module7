import CurrencyChooser from "@/components/CurrencyChooser";

// server components should do the job of data fetching, so we split it out of the standard React version which did everything
async function getBTCData(currency) {
  const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);

  if (!res.ok) {
    // Recommendation: handle errors
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch bitcoin rates");
  }
  return res.json();
}

// We can use searchParams to send chosen state value from client component to server component
export default async function BitCoin({searchParams}) {
  const currency = searchParams.currency ? searchParams.currency : 'AUD';
  const btcResponse = await getBTCData(currency); // fetch data for chosen currency, or default to AUD
  const btcPrice = btcResponse ? btcResponse.bitcoin[currency.toLowerCase()] : 0;

  return (
      <div className="BitCoin">
        <h1>BitCoin Exchange Rates</h1>
        <CurrencyChooser defaultCurrency={currency}/> {/* split out just the client features (ie using state) into a client component */}

        <div>1 BTC is worth {btcPrice} {currency}</div>
      </div>
  );
}
// Check http://localhost:3000/bitcoin to see it in action
