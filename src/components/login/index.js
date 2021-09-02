import React from 'react'
import Forms from 'components/login/parts/forms';
import BubbleBtm from 'assets/img/loginPage/bubble-btm.svg';
import BubbleTop from 'assets/img/loginPage/bubble-top.svg';
function Index() {
    // alert('masuk')
    return (
        <div className="w-100 loginPage d-flex flex-column justify-content-between">
            {/* bubble */}
                {/* max-width: calc((100vw - 27.125em) /4);
    max-height: calc((100vh. - 21.7em) / 4);
    right: unset; */}
            {/* <div className="bubble-top d-flex align-items-start position-absolute"/> */}
            {/* <div style={{maxWidth: 'calc((100vw - 27.125em) /4)', maxHeight: 'calc((100vh. - 21.7em) / 4)'}}> */}
            {/* <div className="bubble-btm d-flex align-items-end position-absolute"/> */}
            <img src={BubbleTop} className="bb-top position-absolute" style={{top: '0', right: '0'}}/>
            <img src={BubbleBtm} className="bb-btm position-absolute" style={{bottom: '0', left: '0', maxWidth: 'calc((100vw - 27.125em) /4)', maxHeight: 'calc((100vh. - 21.7em) / 4)'}}/>
            {/* </div> */}
            {/* bubble */}
            <Forms/>
        </div>
    )
}

export default Index
