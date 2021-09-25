import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import GuestRoutes from "routers/guest";
import LoggedRoutes from "routers/logged";
import TypeTransaction from 'components/customers/transaction/parts/FormTransaction'
import Socket from 'components/socket.js'

import Agent from 'components/agents';
import Customer from 'components/customers';
import LoginPage from 'components/login';
import NotFound from 'components/not_found_page';


const Routes = () => {
    //for dev mode
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token]);
    return (
        <>
            <Switch>

                {/* logged routes */}
                <LoggedRoutes exact path="/" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/>
                <LoggedRoutes exact path="/home" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/>
                <LoggedRoutes exact path="/profile" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/>
                <LoggedRoutes exact path="/transaction" component={localStorage.getItem('token') === 'customer' ? Customer : Agent}/>
                <LoggedRoutes exact path="/transaction/:type" component={localStorage.getItem('token') === 'customer' ? TypeTransaction : Agent}/>
                {/* logged routes */}
                {/* guest routes */}
                <GuestRoutes exact path="/login" component={LoginPage} />
                <GuestRoutes exact path="/socket" component={Socket} />
                {/* guest routes */}
                <Route component={NotFound}/>
            </Switch>
        </>
    )
}

export default Routes;