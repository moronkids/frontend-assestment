import React from 'react'

function Forms() {
    return (
        <div className="forms h-100">
            <div className="wrapLogin">
                <div className="iconLogin"/>
                <div className="formLogin">
                    <div className="inputLogin">
                        <div className="label">Email</div>
                        <input type="email"/>
                    </div>
                    <div className="inputLogin">
                        <div className="label">Password</div>
                        <input type="password"/>
                    </div>
                    {/* <div className="inputLogin">
                        <div className="label">Email</div>
                        <input type="email"/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Forms
