import { Hooks } from 'providers'
import React, { useContext, useEffect, useState } from 'react'
import Home from 'components/agents/home';

function Agent() {
    const { activeTab, setActiveTab } = useContext(Hooks);
    const [renderDom, setRenderDom] = useState()
    useEffect(() => {
        const arr = []
        switch (activeTab) {
            case 'home':
                arr.push(
                    <div><Home /></div>
                )
                break;
            case 'profile':
                arr.push(
                    <div>Profile - Agent</div>
                )
                break;
            default:
                break;
        }
        setRenderDom(arr);
    }, [activeTab])
    return (
        <>
            {renderDom}
        </>
    )
}

export default Agent
