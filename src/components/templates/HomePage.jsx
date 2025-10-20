import { useEffect, useState } from "react";
import TableCoin from "../module/TableCoin";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&order=market_cap_desc&per_page=20&page=1&locale=en&x-cg-demo-api-key=CG-9d6d6yArTACYX91VXxHLCRDv"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);

  return (
    <div>
      <TableCoin coins={coins}/>
    </div>
  );
}

export default HomePage;
