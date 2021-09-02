import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import GuestRoutes from "routers/guest";
import LoggedRoutes from "routers/logged";


import Agent from 'pages/agents';
import Customer from 'pages/customers';


const Routes = () => {
    //for dev mode
    const [token, setToken] = useState('');
    useEffect(() => {
        localStorage.setItem('token', 'agent');
        setToken(localStorage.getItem('token'))
    }, [token]);

    return (
        <>
            <Switch>
                {/* logged routes */}
                {/* <LoggedRoutes exact path="/" component={Homepage} /> */}
                <LoggedRoutes exact path="/" component={localStorage.getItem('token') === 'agent' ? Agent : Customer}/>
                
                {/* <LoggedRoutes exact path="/home" component={localStorage.getItem('token') === 'agent' ? Agent : Customer}/> */}
                {/* logged routes */}

                {/* guest routes */}
                {/* <GuestRoutes exact path="/login" component={LoginPage} /> */}

                {/* guest routes */}
            </Switch>
        </>
    )
}

export default Routes;