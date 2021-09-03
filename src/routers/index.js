import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import GuestRoutes from "routers/guest";
import LoggedRoutes from "routers/logged";


import Agent from 'pages/agents';
import Customer from 'pages/customers';
import LoginPage from 'pages/login';


const Routes = () => {
    //for dev mode
    const [token, setToken] = useState('');
    useEffect(() => {
        // localStorage.setItem('token', 'customer');
        setToken(localStorage.getItem('token'))
    }, [token]);

    return (
        <>
            <Switch>
                {/* logged routes */}
                {/* <LoggedRoutes exact path="/" component={Homepage} /> */}
                {/* <LoggedRoutes exact path="/login" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/> */}
                <LoggedRoutes exact path="/" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/>
                {/* logged routes */}

                {/* guest routes */}
                <GuestRoutes exact path="/login" component={LoginPage} />

                {/* guest routes */}
            </Switch>
        </>
    )
}

export default Routes;