import React, { useContext, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Hooks } from "providers";
import { debounceSearchRender } from "helper/debouncer";
import Spinner from "assets/img/spinner.svg";
const DetailRequest = ({ data, isLoading }) => {
  const { details, setDetails, setId, setIdTrx, setRateCustomer } =
    useContext(Hooks);
  const columns = [
    { field: "id", headerName: "No", width: 100 },
    {
      field: "Coin",
      headerName: "Coin",
      width: 150,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "LastPrice",
      headerName: "Last Price",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "hrChange",
      headerName: "24hr Change",
      type: "number",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "MarketCap",
      headerName: "Market Cap",
      // type: "string",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "Action",
      headerName: "Action",
      options: {
        sort: false,
        filter: false,
        searchable: false,
      },
    },
  ];
  const [cryptoAsset, setCryptoAsset] = useState([]);

  const options = {
    filterType: "dropdown",
    customSearchRender: debounceSearchRender(500),
    responsive: "stacked",
    selectableRows: false, // <===== will turn off checkboxes in rows
  };
  const datas = [];
  useEffect(() => {
    if (cryptoAsset?.length <= 0) {
      const rowx = async () => {
        data?.map((val, i) => {
          console.log(val, "sini");

          // return datas.push({
          //   id: val.id,
          //   Coin: val.logo,
          //   LastPrice: val.lastPrice,
          //   hrChange: val.priceChange,
          //   MarketCap: val.volume,
          //   Action: "tes",
          // });
        });
      };
      // setCryptoAsset(datas);
    }
  }, [cryptoAsset]);
  return (
    <>
      <section className="detail-container d-block m-auto">
        <div
          className="wrap-tabel"
          style={{
            height: "100%",
            width: "80%",
            background: "#FFFFFF",
            marginTop: "40px",
            margin: "0 auto",
          }}
        >
          <MUIDataTable
            title={"Binance Market Crypto"}
            data={data.map((val) => {
              return [
                val.id,
                val.Coin,
                val.LastPrice,
                val.hrChange,
                val.MarketCap,
                val.Action,
              ];
            })}
            columns={columns.map((val) => {
              return val.headerName;
            })}
            options={options}
          />
        </div>
      </section>
    </>
  );
};
export default DetailRequest;
