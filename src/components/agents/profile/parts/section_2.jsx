import React from 'react';


function section_2(){
    return(
        <div className="layanan_container">
            <h5>Layanan BRI</h5>
            <form action="" className="layanan">
                <div className="pilih_layanan">
                    <input type="checkbox" />
                    <span>Laku Pandai</span>
                </div>
                <div className="pilih_layanan">
                    <input type="checkbox" />
                    <span>Mini ATM</span>
                </div>
                <div className="pilih_layanan">
                <input type="checkbox" />
                    <span>Setor Tunai</span>
                </div>
            </form>
        </div>
    )
}

export default section_2;