import { Hooks } from 'providers'
import React, { useContext, useEffect, useState } from 'react'
import Home from 'components/customers/home'
import Transaction from 'components/customers/transaction'

function Customer() {
    const { activeTab, setActiveTab } = useContext(Hooks);
    const [renderDom, setRenderDom] = useState()
    useEffect(() => {
        const arr = []
        switch (activeTab) {
            case 'home':
                arr.push(
                    // <div>Home - Customer</div>
                    <Home />
                )
                break;
            case 'transaction':
                arr.push(
                    // <div>Transaction - Customer</div>
                    <Transaction />
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

export default Customer
