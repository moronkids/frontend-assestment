import React, { useContext, useEffect, useState } from "react";
import WaIcon from "assets/img/icons/WaIcon.svg";
import { transactionCustomer } from "dummies/transaction/transactionCustomer";
import { Hooks } from "providers";

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
function Popup({ data }) {
  const {
    details,
    setDetails,
    setId,
    id,
    setConfirmation,
    setAction,
    confirmation,
    popUpRate,
    setPopUpRate,
  } = useContext(Hooks);
  const [stat, setStat] = useState("");
  //   alert(data);
  console.log(data, "sds");

  const rate = async () => {
    await setPopUpRate(!popUpRate);
    await setDetails(false);
    await setPopUpRate(true);
  };
  useEffect(() => {}, [popUpRate, details]);
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

                {/* Baris Kontent */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Agent BRILink</p>
                    <p className="label-content">
                      {" "}
                      {data?.data?.[id]?.agen?.nama_outlet}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Alamat Agen</p>
                    <p className="label-content">
                      {data?.data?.[id]?.agen?.alamat_lengkap}
                    </p>
                  </div>
                </div>
                {/* Baris Kontent */}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Hubungi Agen</p>
                    <div className="wrap-konten">
                      <p className="label-icon-wa">
                        <img src={WaIcon} alt="icon-wa" />
                      </p>
                      <p className="label-nomor">
                        <a
                          href={`https://wa.me/${data?.data?.[id]?.agen?.no_telp}`}
                          className="link-nomor"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data?.data?.[id]?.agen?.no_telp}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <p className="label-judul">Status</p>
                    <p className="label-content status">
                      {checkStatusAgen(data?.data?.[id]?.status)}
                    </p>
                  </div>
                </div>

                {/* Baris Content */}
                <div className="row">
                  <div className="col-lg-12 col-12">
                    <button
                      onClick={(e) => {
                        data?.data?.[id]?.status === 3
                          ? rate()
                          : setConfirmation(!confirmation);
                        setDetails(false);
                        setAction(
                          data?.data?.[id]?.status === 2
                            ? 3
                            : data?.data?.[id]?.status
                        );
                      }}
                      className={handleButtonClassName(transaksi?.status)}
                      disabled={data?.data?.[id]?.status === 3 && true}
                      style={{
                        pointerEvents: data?.data?.[id]?.status && "none",
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
