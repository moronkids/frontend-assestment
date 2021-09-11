import { Hooks } from 'providers';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function SidebarMobile(props) {
    const { setToggle, toggle } = useContext(Hooks);
    return (
        <React.Fragment>
            <div className={`sidebarMobile position-fixed ${props.data && 'show'}`}>
                <ul>
                    <Link to="/home" onClick={(e) => setToggle(!toggle)}>
                        <li>Home</li>
                    </Link>
                    {localStorage.getItem('token') === 'customer' ?
                        <Link to="/profile" onClick={(e) => setToggle(!toggle)}>
                            <li>Profile</li>
                        </Link> : <Link to="/transaction" onClick={e => setToggle(!toggle)}>
                            <li>Transaction</li>
                        </Link>
                    }
                    <Link to="/login" onClick={e => localStorage.removeItem('token')}>
                        Logout
                    </Link>
                </ul >
            </div >
            <div className={`d-none position-absolute ${props.data && 'd-block'}`} style={{
                width: '100vw', height: '100vh', background: 'rgba(10,10,10,.5)',

            }}></div>
        </React.Fragment >
    )
}

export default SidebarMobile
