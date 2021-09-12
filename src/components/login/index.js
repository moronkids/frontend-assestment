/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Forms from 'components/login/parts/forms';
import BubbleBtm from 'assets/img/loginPage/bubble-btm.svg';
import BubbleTop from 'assets/img/loginPage/bubble-top.svg';
function Index() {
    return (
        <div className="w-100 loginPage d-flex flex-column justify-content-between">
            <img src={BubbleTop} className="bb-top position-absolute" style={{top: '0', right: '0'}}/>
            <img src={BubbleBtm} className="bb-btm position-absolute" style={{bottom: '0', left: '0'}}/>
            <Forms/>
        </div>
    )
}

export default Index
