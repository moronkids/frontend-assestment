import React from 'react'
import IconWa from 'assets/img/icons/whatsapp.svg'

function DetailRequest() {
    return (
        <div>
            <section className="detail-container">
                <div className="detail-content">
                    <h3>Request saat ini</h3>
                    
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
                                <p>Alamat Customer</p>
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
                                <p>Hubungi Customer</p>
                            </div>
                            <div className="col-lg-6 label-right">
                                <p>Status</p>
                            </div>
                        </div>

                        <div className="row label-content">
                            <div className="col-lg-6 label-left hubungi-wa">
                                <img src={IconWa} alt="logo-wa" />
                                <a href="https://api.whatsapp.com/send?phone=6282283775912" target="_blank">082283775912</a>
                            </div>
                            <div className="col-lg-6 label-right status-agen">
                                <p>Menunggu konfirmasi anda</p>
                            </div>
                        </div>
                        
                        <div className="baris-button">
                            <button className="btn-action-detail">Tolak</button>
                        </div>

                        <div className="baris-button">
                            <button className="btn-action-detail">Terima</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailRequest