import React from 'react'
import Sidebar from 'components/layouts/sidebar'
export default function index(props) {
    return (
        <div className='layouts'>
            <Sidebar role={localStorage.getItem('token') === 'agent' ? 'agent' : 'customer'} />
            <div className="bodyWrap">
                {props.children}
            </div>
        </div>
    )
}
