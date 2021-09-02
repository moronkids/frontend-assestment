import React from 'react';
import imgDoc from 'assets/img/icons/EmptyTransaction.svg';

function NoRequest() {
    return (
        <div>
            <section className="home-container">
                <div className="home-content">
                    <div className="column-no-data">
                        <img src={imgDoc} alt="no image"
                            style={{ width: '309px', height: '226px', left: '630px', top: '292px' }}
                        />              
                <h3 className="home-no-request">Saat ini belum ada request transaksi</h3>
                </div>
            </div>
        </section>
    </div>
    )
}

export default NoRequest