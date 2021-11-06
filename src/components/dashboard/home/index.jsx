import React, { useEffect, useState } from "react";
import DetailRequest from "components/dashboard/home/part/detailRequest";
import { useQuery } from "react-query";
import { GetAllAsset, Ticker } from "api";

function Home() {
  const [datas, setDatas] = useState([]);
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getAllAsset",
    async (e) => GetAllAsset(),
    {}
  );
  const {
    isLoading: loadTicker,
    isError: isErrorTicker,
    data: dataTicker,
    error: errorTicker,
    refetch: refetchTicker,
  } = useQuery("getTicker", async (e) => Ticker(), {});
  let filtered;
  const reOrederd = () => {
    const datax = [];
    // eslint-disable-next-line array-callback-return
    data?.data.map((x) => {
      // eslint-disable-next-line array-callback-return
      filtered = dataTicker?.filter((e) => {
        if (e.symbol === `${x.assetCode}USDT`) {
          datax.push({
            id: x.id,
            Coin: x.assetCode,
            Logo: x.logoUrl,
            LastPrice: e.lastPrice,
            hrChange: e.priceChangePercent,
            MarketCap: e.volume,
            Action: "adadeh",
          });
        }
      });
    });
    console.log(datax, "eheh");
    // setDatas(datax);
    // setDatas(datax);
    return datax;
  };
  useEffect(() => {
    if (datas?.length <= 0) {
      const result = reOrederd();
      // console.log(result, "iki opo");
      setDatas(result);
    }
  }, [dataTicker]);
  return (
    //   <noRequest />
    <>
      <DetailRequest data={datas} isLoading={isLoading} />
    </>
  );
}

export default Home;
