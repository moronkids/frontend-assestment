import React from 'react'

function ChooseTransaction() {
    return (
        <div>
            <section className="transaksi-pilih-container">
                <div className="transaksi-pilih-content">
                    <h2>JENIS TRANSAKSI</h2>
                    <div className="row baris-card-opsi">
                        <div className="col-lg-4">
                            <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas">Laku</p>
                                        <p className="judul-bawah">Pandai</p>
                                    </div>
                                    <button>Cash-in & Out</button>
                                    <button>Report</button>
                                    <button>Setoran Uang</button>
                                    <button>Tarik Tunai</button>
                                    <button>Isi Ulang Pulsa</button>
                                    <button>Belanja Merchant</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                             <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas tunai">Tunai</p>
                                    </div>
                                    <button>Setoran Pinjaman</button>
                                    <button>Setoran Simpanan</button>
                                    <button>Tarik Tunai</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                             <div className="card-konten">
                                <div className="child-konten">
                                    <div className="judul">
                                        <p className="judul-atas">Mini</p>
                                        <p className="judul-bawah">ATM BRI</p>
                                    </div>
                                    <button>Daftar Mobile Banking</button>
                                    <button>Daftar Internet Banking</button>
                                    <button>Info Rekening</button>
                                    <button>Transfer Pembayaran</button>
                                    <button>Isi Ulang Pulsa</button>
                                    <button>Setor Pasti</button>
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