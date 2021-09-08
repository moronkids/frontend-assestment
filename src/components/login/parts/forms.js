import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { auth } from 'dummies/auth/auth'
function Forms() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const submitLogin = () => {
        const agent = auth().agent/*'agent@rakamin.com'*/
        const customer = auth().customer /*'customer@rakamin.com'*/
        const dummyPass = auth().pass/*'root'*/
        if(pass === dummyPass) {
            console.log(email === agent, email === customer)
            if(email === agent){
                localStorage.setItem('token', 'agent');
                return window.location.href = "/"

            }
            else if(email === customer){
                localStorage.setItem('token', 'customer');
                 return window.location.href = "/"
            }
            else {

                alert('login error failed 1')
            }
        }
        else {
            console.log(agent, customer, auth)
            alert('login error failed 2')
        }
    }
    useEffect(() => {

    }, [email, pass])
    return (
        <div className="forms h-100">
            <div className="wrapLogin ">
                <div className="iconLogin d-flex m-auto"/>
                <div className="formLogin">
                    <div className="inputLogin">
                        <div className="label">Email</div>
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value) }/>
                    </div>
                    <div className="inputLogin">
                        <div className="label">Password</div>
                        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                    </div>

                    <div className="wrapBtn d-flex justify-content-center align-items-center">
                        <div className="btnLogin" onClick={(e) => submitLogin(e)}>
                        LOGIN
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms