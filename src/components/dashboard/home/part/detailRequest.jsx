import React, { useContext, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Hooks } from "providers";
import { debounceSearchRender } from "helper/debouncer";
import Spinner from "assets/img/spinner.svg";
const DetailRequest = ({ data, isLoading }) => {
  const { details, setDetails, setId, setIdTrx, setRateCustomer } =
    useContext(Hooks);
  const [filter, setFilter] = useState(["a", "b", "c", "Business Analyst"]);
  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 100,
      options: {
        filter: false,
        display: "false",
      },
    },
    {
      name: "Coin",
      label: "Coin",
      width: 150,
      editable: true,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "LastPrice",
      label: "Last Price",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "hrChange",
      label: "24hr Change",
      type: "number",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "MarketCap",
      label: "Market Cap",
      // type: "string",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "Tags",

      label: "Tags",
      // type: "string",
      width: 200,
      options: {
        display: "false",

        filterOptions: {
          names: filter,
          display: false,
        },
      },
    },
    {
      name: "Action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        searchable: false,
      },
    },
  ];
  const [cryptoAsset, setCryptoAsset] = useState([]);

  const options = {
    // filterType: "dropdown",
    customSearchRender: debounceSearchRender(500),
    responsive: "stacked",
    // onFilterChange: (index, value, arr) => {
    //   setFilter([]);
    // },
    print: false,
    selectableRows: false, // <===== will turn off checkboxes in rows
  };

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
            data={data?.map((val, i) => {
              return [
                i + 1,
                val.Coin,
                val.LastPrice,
                val.hrChange,
                val.MarketCap,
                val.Tags,
                val.Action,
              ];
            })}
            // columns={columns.map((val) => {
            //   return val.headerName;
            // })}
            columns={columns}
            options={options}
          />
        </div>
      </section>
    </>
  );
};
export default DetailRequest;
