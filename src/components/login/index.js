import React from 'react'
import Forms from 'components/login/parts/forms';
function Index() {
    // alert('masuk')
    return (
        <div className="w-100 loginPage d-flex flex-column justify-content-between">
            {/* bubble */}
            <div className="bubble-top d-flex align-items-start position-absolute"/>
            <div className="bubble-btm d-flex align-items-end position-absolute"/>
            {/* bubble */}
            <Forms/>
        </div>
    )
}

export default Index
