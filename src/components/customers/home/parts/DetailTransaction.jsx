import React, { useContext, useEffect, useState } from "react";
import WaIcon from "assets/img/icons/WaIcon.svg";
import { transactionCustomer } from "dummies/transaction/transactionCustomer";
import MUIDataTable from "mui-datatables";
import superSearch from "@codewell/super-search";
import { Hooks } from "providers";
import Popup from "components/customers/home/parts/popup";
import { debounceSearchRender } from "helper/debouncer";

let transaksi = null;
transactionCustomer().data.forEach(function (object, value) {
  transaksi = object;
});

// function untuk cek status agen
function checkStatusAgen(status) {
  if (status === 0) {
    return "Menunggu Konfirmasi Agen";
  } else if (status === 1) {
    return "Agen Dalam Perjalanan";
  } else if (status === 2) {
    return "Dibatalkan";
  } else if (status === 3) {
    return "Selesai";
  }
}

// function untuk handle class css pada button
function handleButtonClassName(status) {
  if (status === 3) {
    return "btn btn-secondary float-right";
  } else if (status === 2) {
    return "btn btn-light float-right";
  } else {
    return "btn btn-danger float-right";
  }
}

// function untuk handle class text button
function handleTextButton(status) {
  if (status === 3) {
    return "Beri Rating";
  } else if (status === 2) {
    return "Hapus";
  } else {
    return "Batalkan";
  }
}

function DetailTransaction({ data }) {
  const {
    details,
    setDetails,
    setId,
    setConfirmation,
    setAction,
    confirmation,
    popUpRate,
    setPopUpRate,
    setIdTrx,
  } = useContext(Hooks);

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
        Alamat: val.customer.alamat_lengkap,
        Action: (
          <button
            data-qa-id={i + `-details-team`}
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
  const rate = async () => {
    await setPopUpRate(!popUpRate);
    await setDetails(!details);
  };
  useEffect(() => {
    // console.log(data, ">>");
  }, [popUpRate, details]);
  return (
    <>
      <section className="detail-container d-block m-auto">
        <Popup data={data} />
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
      </section>
    </>
  );
}

export default DetailTransaction;
