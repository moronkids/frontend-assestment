import React, { useContext, useEffect, useState } from "react";
import IconWa from "assets/img/icons/WaIcon.svg";

import { Hooks } from "providers";
function Popup({ data }) {
  const { details, id, confirmation, setConfirmation, setDetails, setAction } =
    useContext(Hooks);
  const [stat, setStat] = useState("");
  //   alert(data);
  console.log(data, "sds");
  const setStat_ = async (val) => {
    // alert(val?.data?.[id].status);
    console.log("debug disini func", val);
    switch (val) {
      case 0: //menunggu konfirmasi agen
        setStat("Menunggu Konfirmasi Agen");
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
  }, [id, stat]);
  return (
    <>
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
          className="detail-content position-fixed"
          style={{ margin: "0 auto", zIndex: details && "149" }}
        >
          <div
            className={`detail-card d-none ${details && "d-block"}`}
            style={{}}
          >
            <div className="row label">
              <div className="col-lg-6 label-left">
                <p>Waktu Request</p>
              </div>

              <div className="col-lg-6 label-right">
                <p>Jenis Transaksi</p>
              </div>
            </div>

            <div className="row label-content">
              <div className="col-lg-6 label-left">
                {console.log("debug disini", data)}
                <p>{data?.data?.[id]?.create_at}</p>
              </div>
              <div className="col-lg-6 label-right">
                {console.log(
                  "debug disini2",
                  data?.data?.[id]?.jenis_transaksi
                )}
                <p>{data?.data?.[id]?.jenis_transaksi}</p>
              </div>
            </div>

            <hr />
            <div className="row nominal-content">
              <div className="col-lg-6 nominal-left">
                <p>Nominal Transaksi</p>
              </div>
              <div className="col-lg-6 nominal-right">
                <p>{data?.data?.[id]?.nominal_transaksi_idr}</p>
              </div>
            </div>
            <hr />

            <div className="row label">
              <div className="col-lg-6 label-left">
                <p>Nama Customer</p>
              </div>
              <div className="col-lg-6 label-right">
                <p>Alamat Customer</p>
              </div>
            </div>

            <div className="row label-content">
              <div className="col-lg-6 label-left">
                <p>{data?.data?.[id]?.customer.nama}</p>
              </div>
              <div className="col-lg-6 label-right">
                <p>{data?.data?.[id]?.customer.alamat_lengkap}</p>
              </div>
            </div>

            <div className="row label">
              <div className="col-lg-6 label-left">
                <p>Hubungi Customer</p>
              </div>
              <div className="col-lg-6 label-right">
                <p>Status</p>
              </div>
            </div>

            <div className="row label-content">
              <div className="col-lg-6 label-left hubungi-wa">
                <img src={IconWa} alt="logo-wa" />
                <a
                  href="https://api.whatsapp.com/send?phone=6282283775912"
                  target="_blank"
                  rel="noreferrer"
                >
                  {data?.data?.[id]?.customer.no_telp}
                </a>
              </div>
              <div className="col-lg-6 label-right status-agen">
                <p>{stat}</p>
              </div>
            </div>

            <div
              className="d-flex"
              style={{ columnGap: "15px", justifyContent: "flex-end" }}
            >
              {console.log(stat, "sdsd")}
              <div className="baris-button">
                <button
                  className="btn-action-detail"
                  onClick={(e) => {
                    setConfirmation(!confirmation);
                    setDetails(false);
                    setAction(0);
                  }}
                >
                  Tolak
                </button>
              </div>

              <div className="baris-button">
                <button
                  className="btn-action-detail discard"
                  onClick={(e) => {
                    setConfirmation(!confirmation);
                    setDetails(false);
                    setAction(1);
                  }}
                >
                  Terima
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
