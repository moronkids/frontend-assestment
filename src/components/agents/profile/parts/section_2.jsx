import React from "react";

function section_2({ data }) {
  return (
    <div className="layanan_container">
      <h5>Layanan BRI</h5>
      <form action="" className="layanan">
        {data?.data.layanan.map((val) => {
          return (
            <div className="pilih_layanan">
              <input type="checkbox" />
              <label>{val.judul}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default section_2;
