import React from 'react';
import img from 'assets/img/icons/NoData.png';

function NoRequest() {
    return (
        <div>
            <section className="container">
                <div className="content">
                    <div className="column-no-data">
                        <img src={img} alt="no image"
                            style={{ width: '309px', height: '226px', left: '630px', top: '292px' }}
                        />              
                <h3 className="no-request">Saat ini belum ada request transaksi</h3>
                </div>
            </div>
        </section>
    </div>
    )
}

export default NoRequest