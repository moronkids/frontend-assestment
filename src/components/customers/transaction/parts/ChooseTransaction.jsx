import React from 'react'
import { Link } from 'react-router-dom';

function ChooseTransaction() {
    return (
        <div>
            <section className="transaksi-pilih-container">
                <div className="transaksi-pilih-content">
                    <h2>JENIS TRANSAKSI</h2>
                    <div className="row baris-card-opsi">
                        <div className="col-lg-4 col-md-6">
                            <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas">Laku Pandai</p>
                                    </div>
                                    <Link to="/transaction/cash_in%20out">
                                        <button>Cash-in & Out</button>
                                    </Link>
                                    <Link to="/transaction/report">
                                        <button>Report</button>
                                    </Link>
                                    <Link to="/transaction/setoran%20uang">
                                        <button>Setoran Uang</button>
                                    </Link>
                                    <Link to="/transaction/tarik%20tunai">
                                        <button>Tarik Tunai</button>
                                    </Link>
                                    <Link to="/transaction/isi%20ulang%20pulsa">
                                        <button>Isi Ulang Pulsa</button>
                                    </Link>
                                    <Link to="/transaction/belanja%20merchant">
                                        <button>Belanja Merchant</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas tunai">Tunai</p>
                                    </div>
                                    <Link to="/transaction/setoran%20pinjaman">
                                        <button>Setoran Pinjaman</button>
                                    </Link>
                                    <Link to="/transaction/setoran%20pinjaman">
                                        <button>Setoran Simpanan</button>
                                    </Link>
                                    <Link to="/transaction/tarik%20tunai">
                                        <button>Tarik Tunai</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas">Mini ATM BRI</p>
                                    </div>
                                    <Link to="/transaction/daftar%20mobile%20banking">
                                        <button>Daftar Mobile Banking</button>
                                    </Link>
                                    <Link to="/transaction/daftar%20internet%20banking">
                                        <button>Daftar Internet Banking</button>
                                    </Link>
                                    <Link to="/transaction/info%20rekening">
                                        <button>Info Rekening</button>
                                    </Link>
                                    <Link to="/transaction/transfer%20pembayaran">
                                        <button>Transfer Pembayaran</button>
                                    </Link>
                                    <Link to="/transaction/isi%20ulang%20pulsa">
                                        <button>Isi Ulang Pulsa</button>
                                    </Link>
                                    <Link to="/transaction/setor%20pasti">
                                        <button>Setor Pasti</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ChooseTransaction;