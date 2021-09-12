import React from 'react'
import WaIcon from 'assets/img/icons/WaIcon.svg';

function DetailTransaction() {
    return (
        <>
            <section className="customer-container">
                <div className="customer-content">
                    <h2>Transaksi Saat Ini</h2>

                    <div className="card myCard">
                        <div className="card-body my-card-body">
                            {/* Baris Kontent */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Waktu Request</p>
                                    <p className="label-content">19/08/2021, 13:20 WIB</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Jenis Transaksi</p>
                                    <p className="label-content">Setoran Tunai</p>
                                </div>
                            </div>

                            <hr className="garis-pertama" />
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Nominal Transaksi</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-nominal-transaksi">Rp. 10.000.000</p>
                                </div>
                            </div>
                            <hr className="garis-kedua" />

                            {/* Baris Kontent */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Nama Customer</p>
                                    <p className="label-content">Radi Marandika</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Alamat Anda</p>
                                    <p className="label-content">Jalan Ahmad Yamin, No.21 Bogor</p>
                                </div>
                            </div>

                            {/* Baris Kontent */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Agent BRILink</p>
                                    <p className="label-content">Agus Cipto Sutejo</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Alamat Agen</p>
                                    <p className="label-content">Jalan Sebelahnya, No.87 Bogor</p>
                                </div>
                            </div>

                            {/* Baris Kontent */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Hubungi Agen</p>
                                    <div className="wrap-konten">
                                        <p className="label-icon-wa"><img src={WaIcon} alt="icon-wa" /></p>
                                        <p className="label-nomor"><a href="#" className="link-nomor">0812 2243 1201</a></p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-judul">Status</p>
                                    <p className="label-content status">Agen dalam perjalanan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailTransaction
