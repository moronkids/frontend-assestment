import React, { useCallback, useContext, useEffect, useState } from "react";
import DetailRequest from "components/dashboard/home/part/detailRequest";
import { useQuery } from "react-query";
import { GetAllAsset, Ticker } from "api";
import useWebSocket from "react-use-websocket";

import { Hooks } from "providers";
function Home() {
  const [datas, setDatas] = useState([]);
  const { Tag, searchInput } = useContext(Hooks);
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
    const webSocketData = JSON.parse(lastMessage?.data);
    const datax = data?.data
      .map((x) => {
        // eslint-disable-next-line array-callback-return
        const ticker = dataTicker?.filter(
          (z) => z.symbol === `${x.assetCode}USDT`
        )[0];
        const filtered = webSocketData?.filter((u) => u.s === ticker?.symbol);
        const checkPoint = filtered.length !== 0 ? true : false;
        return {
          id: x.id,
          Coin: x.assetCode,
          Logo: x.logoUrl,
          Tag: x.tags,
          LastPrice:
            checkPoint &&
            (parseFloat(filtered[0]?.c).toFixed(2) < ticker?.lastPrice || 0) ? (
              <div className="text-red-500">
                {parseFloat(filtered[0]?.c).toFixed(2)}
              </div>
            ) : parseFloat(filtered[0]?.c).toFixed(2) > ticker?.lastPrice ||
              0 ? (
              <div className="text-green-500">
                {parseFloat(filtered[0]?.c).toFixed(2)}
              </div>
            ) : (
              <div className="text-gray-800">
                {parseFloat(filtered[0]?.c).toFixed(2)}
              </div>
            ),
          hrChange: checkPoint
            ? parseFloat(filtered[0].P).toFixed(2)
            : parseFloat(ticker?.priceChangePercent).toFixed(2) || "0",
          MarketCap: checkPoint
            ? parseFloat(filtered[0].v)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : parseFloat(ticker?.volume)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") || "0",
          // statLastPrice:
          //   checkPoint &&
          //   (filtered[0].c < ticker?.lastPrice || 0
          //     ? "down"
          //     : filtered[0].c > ticker?.lastPrice || 0
          //     ? "up"
          //     : "none"),
          // statPercent:
          //   checkPoint &&
          //   (filtered[0].P < ticker?.priceChangePercent || 0
          //     ? "down"
          //     : filtered[0].P > ticker?.priceChangePercent || 0
          //     ? "up"
          //     : "none"),
          Tags: x.tags.join(),
          Action: (
            <>
              <button
                data-testid={"btn-details"}
                type="button"
                className="btn btn-success"
                // onClick={() => {
                //   setDetails(!details);
                //   setId(i);
                //   setIdTrx(val.id);
                //   setRateCustomer(val.rating);
                // }}
              >
                Trade
              </button>
            </>
          ),
        };
      })
      .filter((z) => z.LastPrice !== "NaN")
      .sort((a, b) => {
        if (a.Coin < b.Coin) {
          return -1;
        }
        if (a.Coin > b.Coin) {
          return 1;
        }
        return 0;
      });

    if (Tag === "empty") {
      return datax;
    } else {
      return datax?.filter((val) => val.Tag?.includes(Tag));
    }
  }, [lastMessage, Tag]);
  let result;
  useEffect(() => {
    if (lastMessage) {
      result = callbackz();
      setDatas(result);
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
