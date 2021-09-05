import React from 'react'

function FormTransaction() {
    return (
        <div>
            <section className="form-container">
                <div className="form-content">

                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="judul">JENIS TRANSAKSI</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="jenis-layanan float-right">
                                Setoran Pinjaman
                            </div>
                        </div>
                    </div>

                    <form action="" className="my-form">
                        <div className="baris row">
                            <div className="col-lg-8">
                                <label className="form-control-label" htmlFor="nominal-transaksi">Nominal Transaksi</label>
                                <input type="number" className="form-control-input" name="nominal transaksi" id="nominal-transaksi" placeholder="Rp. 2.000.000"/>
                            </div>
                        </div>

                        <div className="baris">
                            <label className="form-control-label" htmlFor="alamat-lengkap">Alamat Lengkap</label>
                            <input type="text" className="form-control-input" name="alamat-lengkap" id="alamat-lengkap" placeholder="Jalan Pattimura No.12 Blok C"/>
                        </div>

                        <div className="baris daerah row">
                            <div className="col-lg-4">
                                <label className="form-control-label" htmlFor="provinsi">Provinsi</label>
                                <select name="provinsi" id="provinsi">
                                    <option value="#">-- PILIH --</option>
                                </select>
                            </div>

                            <div className="col-lg-4">
                                <label className="form-control-label"  htmlFor="kabupaten">Kabupaten</label>
                                <select name="kabupaten" id="kabupaten">
                                    <option value="#">-- PILIH --</option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-control-label" htmlFor="kecamatan">Kecamatan</label>
                                <select name="kecamatan" id="kecamatan">
                                    <option value="#">-- PILIH --</option>
                                </select>
                            </div>
                        </div>

                        <div className="baris btn-cari-agen">
                            <button>Cari Agen</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default FormTransaction;
