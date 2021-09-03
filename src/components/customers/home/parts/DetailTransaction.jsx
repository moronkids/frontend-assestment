import React from 'react'
import WaIcon from 'assets/img/icons/WaIcon.svg';

function DetailTransaction() {
    return (
        <div>
            <section className="home-detail-container">
                <div className="home-detail-content">
                    <h2>Transaksi saat ini</h2>
                    <div className="home-detail-my-card">
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
                                <p>29/08/2021, 13:00 WIB</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Setoran Pinjaman</p>
                            </div>
                        </div>

                        <hr />
                        <div className="row nominal-content">
                            <div className="col-lg-6 nominal-left">
                                <p>Nominal Transaksi</p>
                            </div>
                            <div className="col-lg-6 nominal-right">
                                <p>Rp. 10.000.000</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row label">
                            <div className="col-lg-6 label-left">
                                <p>Nama Customer</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Alamat Anda</p>
                            </div>
                        </div>

                        <div className="row label-content">
                            <div className="col-lg-6 label-left">
                                <p>Mayasari</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Jalan Pajajaran, No.119 Bogor</p>
                            </div>
                        </div>

                        <div className="row label">
                            <div className="col-lg-6 label-left">
                                <p>Agen BRILink</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Alamat Agen</p>
                            </div>
                        </div>

                        <div className="row label-content">
                            <div className="col-lg-6 label-left">
                                <p>Barokah Link</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Jalan Ahmad Yani, No.21 Bogor</p>
                            </div>
                        </div>

                        <div className="row label">
                            <div className="col-lg-6 label-left">
                                <p>Hubungi Agen</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Status</p>
                            </div>
                        </div>

                        <div className="row label-content">
                            <div className="col-lg-6 label-left hubungi-wa">
                                <img src={WaIcon} alt="logo-wa" />
                                <a href="https://api.whatsapp.com/send?phone=6282283775912" target="_blank">082283775912</a>
                            </div>
                            <div className="col-lg-6 label-right status-agen">
                                <p>Agen sedang dalam perjalanan</p>
                            </div>
                        </div>

                        <div className="baris-button">
                            <button className="btn-action-detail">Batalkan</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailTransaction
