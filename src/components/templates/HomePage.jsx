import { useEffect, useState } from "react";
import TableCoin from "../module/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../module/Pagination";
import Search from "../module/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
     try {
       const res = await fetch(getCoinList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
     } catch (error) {
      alert(error)
     }
    };
    getData();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
