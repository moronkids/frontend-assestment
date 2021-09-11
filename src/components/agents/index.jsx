import { Hooks } from 'providers'
import React, { useContext, useEffect, useState } from 'react'
import Home from 'components/agents/home';
import Profile from 'components/agents/profile'
import { useLocation } from 'react-router';

function Agent() {
    // const { activeTab, setActiveTab } = useContext(Hooks);
    const loc = useLocation()
    // const [renderDom, setRenderDom] = useState()
    // useEffect(() => {
    //     const arr = []
    //     switch (activeTab) {
    //         case 'home':
    //             arr.push(
    //                 <><Home /></>
    //             )
    //             break;
    //         case 'profile':
    //             arr.push(
    //                 <><Profile /></>
    //             )
    //             break;
    //         default:
    //             break;
    //     }
    //     setRenderDom(arr);
    // }, [activeTab])
    return (
        <>
            {loc.pathname === '/home' ? (<Home />) : (
                <Profile />)}
        </>
    )
}

export default Agent
