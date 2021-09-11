import React from 'react'
import IconWa from 'assets/img/icons/whatsapp.svg'

function DetailRequest() {
    return (
        <React.Fragment>
            <section className="detail-container">
                <div className="detail-content">
                    <h3>Request saat ini</h3>

                    <div className="detail-card">

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <p className="label-left">Waktu Request</p>
                            <p className="label-content">19/08/2021, 13:20 WIB</p>
                        </div>
                            
                            <div className="col-lg-6 col-md-12 col-12">
                                <p className="label-right">Jenis Transaksi</p>
                                <p className="label-content">Setoran Tunai</p>
                            </div>
                    </div>

                        <hr />
                        <div className="row nominal-content">
                            <div className="col-lg-6 label-nominal">
                                <p>Nominal Transaksi</p>
                            </div>
                            <div className="col-lg-6 nominal-right">
                                <p>Rp. 10.000.000</p>
                            </div>
                        </div>
                        <hr />

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <p className="label-left">Nama Customer</p>
                                <p className="label-content">Marisa</p>
                            </div>
                                
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-right">Alamat Anda</p>
                                    <p className="label-content">Jalan Pajajaran No.21</p>
                                </div>
                        </div>
                        

                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <p className="label-left">Hubungi Customer</p>
                                <div className="label-content hubungi-wa">
                                    <img src={IconWa} alt="logo-wa" />
                                    <a href="https://api.whatsapp.com/send?phone=6282283775912" 
                                            target="_blank" rel="noreferrer">082283775912</a>
                                </div>
                            </div>
                            

                             <div className="col-lg-6 col-md-12 col-12">
                                <p className="label-right space-status">Status</p>
                                <p className="label-content status-agen">
                                {
                                    true ? (<p>Menunggu konfirmasi anda</p>) : <p>Agen dalam perjalanan</p>
                                }

                                </p>
                            </div>
                        </div>        
                        
                        

                        <div className="d-flex" style={{ columnGap: '15px', justifyContent: 'flex-end' }}>
                            <div className="baris-button">
                                <button className="btn-action-detail button_cancel">Tolak</button>
                            </div>

                            {
                                true ? (<div className="baris-button">
                                    <button className="btn-action-detail button_accept">Terima</button>
                                </div>) : <div className="baris-button">
                                    <button className="btn-action-detail">adadeh</button>
                                </div>
                            }
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default DetailRequest