import React from "react";
import IconWa from "assets/img/icons/WaIcon.svg";

function DetailRequest({ data }) {
  console.log(">>", data);
  return (
    <React.Fragment>
      <section className="detail-container d-block">
        {data?.data.map((val) => {
          return (
            <div className="detail-content" style={{ margin: "0 auto" }}>
              <h2>Request saat ini</h2>

              <div className="detail-card">
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
                    <p>{val.created_at}</p>
                  </div>
                  <div className="col-lg-6 label-right">
                    <p>{val.jenis_transaksi}</p>
                  </div>
                </div>

                <hr />
                <div className="row nominal-content">
                  <div className="col-lg-6 nominal-left">
                    <p>Nominal Transaksi</p>
                  </div>
                  <div className="col-lg-6 nominal-right">
                    <p>{val.nominal_transaksi_idr}</p>
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
                    <p>{val.customer.nama}</p>
                  </div>
                  <div className="col-lg-6 label-right">
                    <p>{val.customer.alamat_cust_lengkap}</p>
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
                      {val.customer.no_telp}
                    </a>
                  </div>
                  <div className="col-lg-6 label-right status-agen">
                    {true ? (
                      <p>Menunggu konfirmasi anda</p>
                    ) : (
                      <p>Agen dalam perjalanan</p>
                    )}
                  </div>
                </div>

                <div
                  className="d-flex"
                  style={{ columnGap: "15px", justifyContent: "flex-end" }}
                >
                  <div className="baris-button">
                    <button className="btn-action-detail">Tolak</button>
                  </div>

                  {true ? (
                    <div className="baris-button">
                      <button className="btn-action-detail discard">
                        Terima
                      </button>
                    </div>
                  ) : (
                    <div className="baris-button">
                      <button className="btn-action-detail">adadeh</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default DetailRequest;
