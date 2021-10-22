import React from "react";
import Start from "assets/img/icons/Start.svg";
import { green } from "@material-ui/core/colors";

function section_1({ data }) {
  console.log(">>", data);
  return (
    <div className="container_section_1">
      <img className="img_section_1" src="" alt="" />
      <div className="desc_section_1">
        <h1 className="title_section_1">{data?.data.nama_outlet}</h1>
        <h5>Rating</h5>
        <div className="rating">
          <label htmlFor="rate">{data?.data.rating.toFixed(2)}</label>
          {/* <div>
            <span>
              <img src={Start} alt="" />
            </span>
            <span>
              <img src={Start} alt="" />
            </span>
            <span>
              <img src={Start} alt="" />
            </span>
            <span>
              <img src={Start} alt="" />
            </span>
            <span>
              <img src={Start} alt="" />
            </span>
          </div> */}
        </div>

        <table>
          <tr>
            <td>Alamat</td>
            <td>{data?.data.alamat_cust_lengkap}</td>
          </tr>
          <tr>
            <td>Pemilik Agen</td>
            <td>{data?.data.nama_agen}</td>
          </tr>
          <tr>
            <td>No Telepon</td>
            <a href="">
              <td>{data?.data.no_telp}</td>
            </a>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default section_1;
