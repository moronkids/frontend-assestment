import React, { useCallback, useEffect, useState } from "react";
import DetailRequest from "components/dashboard/home/part/detailRequest";
import { useQuery } from "react-query";
import { GetAllAsset, Ticker } from "api";
import useWebSocket from "react-use-websocket";
import { last } from "lodash";
function Home() {
  const [datas, setDatas] = useState([]);
  const socketUrl = "wss://stream.binance.com:9443/ws/!ticker@arr";
  const { lastMessage } = useWebSocket(socketUrl);

  const { isLoading, isError, data, error, refetch } = useQuery(
    "getAllAsset",
    async (e) => GetAllAsset(),
    {
      // refetchInterval: 2000,
    }
  );
  const {
    isLoading: loadTicker,
    isError: isErrorTicker,
    data: dataTicker,
    error: errorTicker,
    refetch: refetchTicker,
  } = useQuery("getTicker", async (e) => Ticker(), {
    // refetchInterval: 2000,
  });
  let filtered;

  // eslint-disable-next-line array-callback-return
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callbackz = useCallback(() => {
    const datax = [];
    data?.data.map(
      (x) => {
        // eslint-disable-next-line array-callback-return
        JSON.parse(lastMessage?.data).filter((e) => {
          if (e.s === `${x.assetCode}USDT`) {
            datax.push({
              id: x.id,
              Coin: x.assetCode,
              Logo: x.logoUrl,
              LastPrice: e.c,
              hrChange: e.P,
              MarketCap: e.v,
              Tags: x.tags.join(),
              Action: "adadeh",
            });
          }
        });
      },
      [lastMessage]
    );
    return datax;
  });
  let result;
  useEffect(() => {
    if (lastMessage) {
      // if (dataTicker?.length <= 0) {
      result = callbackz();
      setDatas(result);
      // console.log(result, "iki opo");
      // }
    }
  }, [result, lastMessage]);
  return (
    //   <noRequest />
    <>
      <DetailRequest data={datas} isLoading={isLoading} />
    </>
  );
}

export default Home;
