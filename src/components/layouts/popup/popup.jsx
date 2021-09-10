import { Hooks } from 'providers'
import React, { useContext } from 'react'

function Popup() {
    const { popUpRate, setPopUpRate } = useContext(Hooks)
    return (
        <>
            <div className={`popup d-none ${popUpRate && 'd-block'}`}>
                <div className="popup-box">
                    <div className="popup-box__img"></div>
                    <div className="popup-box__desc"></div>
                    <div className="popup-box__rate">
                        <img src="" alt="" className="star-fill" />
                        <img src="" alt="" className="star-fill" />
                        <img src="" alt="" className="star-fill" />
                        <img src="" alt="" className="star-fill" />
                        <img src="" alt="" className="star-nofill" />

                    </div>
                    <div className="popup-box__submit">
                        Submit
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
