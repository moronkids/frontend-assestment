import React from 'react';


function section_2(){
    return(
        <div className="layanan_container">
            <h5>Layanan BRI</h5>
            <form action="" className="layanan">
                <div className="pilih_layanan">
                    <input type="checkbox"/><label>Laku Pandai</label>
                </div>
                <div className="pilih_layanan">
                    <input type="checkbox" /> <label>Mini ATM</label>
                </div>
                <div className="pilih_layanan">
                <input type="checkbox" /><label>Setor Tunai</label>
                </div>
            </form>
        </div>
    )
}

export default section_2;