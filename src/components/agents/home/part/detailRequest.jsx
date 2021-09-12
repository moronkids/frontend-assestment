
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal, ModalFooter, ModalHeader, ModalBody} from "reactstrap";
import WaIcon from "assets/img/icons/WaIcon.svg";

function DetailRequest() {

  //function Modal(props) {

  const [modal, setModal] = React.useState(false);
  
  const toggle = () => setModal(!modal);
  
  return (
    <React.Fragment>
      <section className="detail-container">
                <div className="detail-content">
                    <h2>Transaksi Saat Ini</h2>

                    <div className="detail-card">
                        
                            {/* */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-left">Waktu Request</p>
                                    <p className="label-content">20/08/2021, 13:20 WIB</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-right">Jenis Transaksi</p>
                                    <p className="label-content">Setoran Tunai</p>
                                </div>
                            </div>

                            <hr />
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-left label-nominal">Nominal Transaksi</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-right nominal-right">Rp. 10.000.000</p>
                                </div>
                            </div>
                            <hr />

                            {/* Data Customer */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-left">Nama Customer</p>
                                    <p className="label-content">Supinah</p>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-right">Alamat Customer</p>
                                    <p className="label-content">Jalan Pajajaran No.21 Bogor</p>
                                </div>
                            </div>

                            {/* Kontak Customer */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <p className="label-left">Hubungi Customer</p>
                                    <div className="wrap-konten">
                                        <p className="label-icon-wa"><img src={WaIcon} alt="icon-wa" /></p>
                                        <p className="label-content"><a href="#" className="link-wa">0812 2243 1201</a></p>
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

                            {/* button tolak */}

                        <div className="d-flex" style={{ columnGap: '15px', justifyContent: 'flex-end' }}>
                            <div>
                                <button className="btn-action-detail button_cancel" onClick={toggle}>Tolak</button>
                            </div>

                            {/* button terima */}
                                  <div>
                                    <button className="btn-action-detail button_accept" onClick={toggle}>
                                      Terima</button>

                                    <Modal isOpen={modal} toggle={toggle}>
                                       <ModalHeader toggle={toggle}>Konfirmasi</ModalHeader>
                                    
                                    <ModalBody>
                                      Apakah anda ingin melanjutkan transaksi customer?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Terima Transaksi</Button>
                                    </ModalFooter>
                                    
                                    </Modal>
                                  </div> 
                            </div>
                          </div>
                        </div>
            </section>
      </React.Fragment>
  
                                
    );
  }




export default DetailRequest
