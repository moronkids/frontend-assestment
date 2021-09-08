import React from 'react'

function SidebarMobile(props) {
    return (
        <React.Fragment>
            <div className={`sidebarMobile position-fixed ${props.data && 'show'}`}>
            </div>
            <div className={`d-none position-absolute ${props.data && 'd-block'}`} style={{
                width: '100vw', height: '100vh', background: 'rgba(10,10,10,.5)',

            }}></div>
        </React.Fragment>
    )
}

export default SidebarMobile
