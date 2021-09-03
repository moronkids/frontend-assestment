import React from 'react'
import NoDataImg from 'assets/img/icons/NoData.png'

function NoTransaction() {
    return (
        <div>
            <section className="home-container">
                <div className="home-content">
                   <div className="column-no-data">
                        <img src={NoDataImg} alt="Gambar tidak ada data" />
                        <button className="home-no-data-btn-new-transaksi">Mulai Transaksi Baru</button>
                   </div>
                </div>
            </section>
       </div>
    )
}

export default NoTransaction
