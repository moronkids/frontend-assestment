import React from "react";
import WaIcon from "assets/img/icons/WaIcon.svg";
import { transactionCustomer } from "dummies/transaction/transactionCustomer";

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
    return "Dibatalkan";
  } else {
    return "Batalkan";
  }
}

function DetailTransaction({ data }) {
  return (
    <>
      <section className="customer-container">
        {data?.data.map((val) => {
          return (
            <div className="customer-content pb-5">
              <h2>Transaksi Saat Ini</h2>

              <div className="card myCard">
                <div className="card-body my-card-body">
                  {/* Baris Kontent */}
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Waktu Request</p>
                      <p className="label-content">{val.created_at}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Jenis Transaksi</p>
                      <p className="label-content">{val.jenis_transaksi}</p>
                    </div>
                  </div>

                  <hr className="garis-pertama" />
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Nominal Transaksi</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-nominal-transaksi">
                        {val.nominal_transaksi_idr}
                      </p>
                    </div>
                  </div>
                  <hr className="garis-kedua" />

                  {/* Baris Kontent */}
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Nama Customer</p>
                      <p className="label-content"> {val.customer.nama}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Alamat Anda</p>
                      <p className="label-content">
                        {val.customer.alamat_cust_lengkap}
                      </p>
                    </div>
                  </div>

                  {/* Baris Kontent */}
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Agent BRILink</p>
                      <p className="label-content"> {val.agen.nama_outlet}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Alamat Agen</p>
                      <p className="label-content">
                        {val.agen.alamat_cust_lengkap}
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
                          <a href="#" className="link-nomor">
                            {val.agen.no_telp}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <p className="label-judul">Status</p>
                      <p className="label-content status">
                        {checkStatusAgen(transaksi.status)}
                      </p>
                    </div>
                  </div>

                  {/* Baris Content */}
                  <div className="row">
                    <div className="col-lg-12 col-12">
                      <button
                        className={handleButtonClassName(transaksi.status)}
                      >
                        {handleTextButton(transaksi.status)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default DetailTransaction;
