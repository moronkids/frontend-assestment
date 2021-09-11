import React from 'react';
import Start from 'assets/img/icons/Start.svg'



function section_1() {
    return (
        <div className="container_section_1">
            <img className="img_section_1" src="" alt="" />
            <div className="desc_section_1">
                <h1 className="title_section_1">Barokah</h1>
                <h5>Rating</h5>
                <div className="rating">
                    <label htmlFor="rate">10</label>
                    <div>
                        <span><img src={Start} alt="" /></span>
                        <span><img src={Start} alt="" /></span>
                        <span><img src={Start} alt="" /></span>
                        <span><img src={Start} alt="" /></span>
                        <span><img src={Start} alt="" /></span>
                    </div>
                </div>

                <table >
                    <tr >
                        <td>Alamat</td>
                        <td >Jalan Pajajaran No.12</td>
                    </tr>
                    <tr >
                        <td>Pemilik Agen</td>
                        <td >Jaja Herman</td>
                    </tr>
                    <tr >
                        <td>No Telepon</td>
                        <a href=""><td >083820201234</td></a>
                    </tr>
                </table>

            </div>

        </div>

    );
}

export default section_1;