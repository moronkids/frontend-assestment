import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import superSearch from "@codewell/super-search";
import { Hooks } from "providers";
import Popup from "components/agents/home/part/backup";
import { debounceSearchRender } from "helper/debouncer";
import Spinner from "assets/img/spinner.svg";
const DetailRequest = ({ data, isLoading }) => {
  // console.log(">>", data);
  const { details, setDetails, setId, setIdTrx } = useContext(Hooks);
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "NamaAgen",
      headerName: "Nama Agen",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "NomorTelp",
      headerName: "Nomor Telp",
      width: 200,
      editable: true,
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      field: "Alamat",
      headerName: "Alamat",
      type: "number",
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
  const datas = [];
  const rowx = async () => {
    data?.data?.map((val, i) => {
      return datas.push({
        id: i + 1,
        NamaAgen: val.customer.nama,
        NomorTelp: val.customer.no_telp,
        Alamat: val.customer.alamat_cust_lengkap,
        Action: (
          <>
            <button
              data-testid={"btn-details"}
              type="button"
              className="btn btn-success"
              onClick={() => {
                setDetails(!details);
                setId(i);
                setIdTrx(val.id);
              }}
            >
              Details
            </button>
          </>
        ),
      });
    });
  };
  if (data !== undefined) {
    rowx();
  }
  const options = {
    filterType: "dropdown",
    customSearchRender: debounceSearchRender(500),
    responsive: "stacked",
    selectableRows: false, // <===== will turn off checkboxes in rows
  };
  return (
    <>
      <section className="detail-container d-block m-auto">
        <Popup data={data} />
        {isLoading ? (
          <>
            <div
              data-qa-id="dashboard-agent"
              className="w-100 h-100 d-flex justify-content-center align-items-center m-auto"
            >
              {/* fech data */}
              <img src={Spinner} alt="" width={150} height={150} srcset="" />
            </div>
          </>
        ) : (
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
            {/* <div className="w-100 h-100 d-flex justify-content-center align-items-center m-auto">
            <img src={Spinner} alt="" width={150} height={150} srcset="" />
          </div> */}
            <MUIDataTable
              title={"Transaksi Saat ini"}
              data={datas.map((val) => {
                return [
                  val.id,
                  val.NamaAgen,
                  val.NomorTelp,
                  val.Alamat,
                  val.Action,
                ];
              })}
              columns={columns.map((val) => {
                return val.headerName;
              })}
              options={options}
            />
          </div>
        )}
      </section>
    </>
  );
};
export default DetailRequest;
