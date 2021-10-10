import React, { useContext, useEffect, useState } from "react";
import WaIcon from "assets/img/icons/WaIcon.svg";
//import { transactionCustomer } from "dummies/transaction/transactionCustomer";
import { Hooks } from "providers";
import { useQueryClient } from "react-query";

//let transaksi = null;
//transactionCustomer().data.forEach(function (object, value) {
//transaksi = object;
//});

// function untuk cek status customer
function checkStatusRequest(status) {
  if (status === 0) {
    return "Menunggu konfirmasi Anda";
  } else if (status === 1) {
    return "Agen dalam perjalanan";
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
  console.log(status, 'popup')
  if (status === 3) {
    return "Lihat Rating";
  } else if (status === 2) {
    return "Hapus";
  } else {
    return "Batalkan";
  }
}
function Popup({ data }) {
  const queryClient = useQueryClient();
  const {
    details,
    id,
    confirmation,
    setConfirmation,
    setDetails,
    setAction,
    idTrx,
  } = useContext(Hooks);
  const [stat, setStat] = useState("");
  //   alert(data);
  console.log(data, "sds");

  const setStat_ = async (val) => {
    // alert(val?.data?.[id].status);
    console.log("debug disini func", val);
    switch (val) {
      case 0: //menunggu konfirmasi agen
        setStat("Menunggu Konfirmasi Anda");
        break;

      case 1: //agen dalam perjalanan
        setStat("Agen dalam Perjalanan");
        break;

      case 2: //dibatalkan
        setStat("Dibatalkan");
        break;

      case 3: //selesai
        setStat("Selesai");
        break;

      default:
        break;
    }
  };
  console.log("debug disini x", data, id);
  useEffect(() => {
    setStat_(data?.data?.[id]?.status);
  }, [id, stat, data]);
  return (
    <>
      {console.log(data, ">>iniglo")}
      <div
        className={`modal-popup d-flex justify-content-center d-none ${
          details && "d-block"
        }`}
        style={{
          zIndex: "150",
          //   width: "100vw",
          //   marginLeft: "-135px",
        }}
      >
        <div
          className="customer-container detail-content position-fixed"
          style={{ margin: "0 auto", zIndex: details && "149" }}
        >
          <div
            className={`customer-content detail-card d-none ${
              details && "d-block"
            }`}
            style={{}}
          >
            <div className="">
              <div className="card-body my-card-body">
                {/* Baris Kontent */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Waktu Request</p>
                    <p className="label-content">
                      {data?.data?.[id]?.create_at}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Jenis Transaksi</p>
                    <p className="label-content">
                      {data?.data?.[id]?.jenis_transaksi}
                    </p>
                  </div>
                </div>

                <hr className="garis-pertama" />
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Nominal Transaksi</p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-nominal-transaksi">
                      {data?.data?.[id]?.nominal_transaksi}
                    </p>
                  </div>
                </div>
                <hr className="garis-kedua" />

                {/* Baris Kontent */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Nama Customer</p>
                    <p className="label-content">
                      {" "}
                      {data?.data?.[id]?.customer?.nama}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Alamat Anda</p>
                    <p className="label-content">
                      {data?.data?.[id]?.customer?.alamat_lengkap}
                    </p>
                  </div>
                </div>

                {/* Baris Konten customer */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Nama Customer</p>
                    <p className="label-content">
                      {" "}
                      {data?.data?.[id]?.customer?.nama}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Alamat Customer</p>
                    <p className="label-content">
                      {data?.data?.[id]?.customer?.alamat_lengkap}
                    </p>
                  </div>
                </div>
                {/* Baris Konten */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Hubungi Customer</p>
                    <div className="wrap-konten">
                      <p className="label-icon-wa">
                        <img src={WaIcon} alt="icon-wa" />
                      </p>
                      <p className="label-nomor">
                        <a
                          href={`https://wa.me/${data?.data?.[id]?.customer?.no_telp}`}
                          className="link-nomor"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data?.data?.[id]?.customer?.no_telp}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Status</p>
                    <p className="label-content status">
                      {checkStatusRequest(data?.data?.[id]?.status)}
                    </p>
                  </div>
                </div>

                {/* Baris Content */}
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <button
                      onClick={(e) => {
                        data?.data?.[id]?.status === 3
                          
                        setConfirmation(!confirmation);
                        setDetails(false);
                        setAction(
                          data?.data?.[id]?.status === 2
                            ? 2
                            : data?.data?.[id]?.status === 1 ? 1 : 0
                        );
                      }}
                      className={handleButtonClassName(transaksi?.status)}
                      disabled={data?.data?.[id]?.status === 3 && true}
                      style={{
                        pointerEvents: data?.data?.[id]?.status === 3 && "none",
                      }}
                    >
                      {handleTextButton(data?.data?.[id]?.status)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
