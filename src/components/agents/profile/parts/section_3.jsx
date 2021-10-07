import React from "react";

function section_3({ data }) {
  return (
    <div>
      <h5>Jumlah Saldo Minimum</h5>
      <div className="saldo_container">
        <input
          className="saldo-min"
          type="text"
          placeholder={`${data?.data.maksimum_transaksi}`}
        />
        <button className="btn-simpan">Simpan</button>
      </div>
    </div>
  );
}

export default section_3;
