import React, { useContext, useState } from 'react'
import IconBri from "assets/img/icons/BriHeader.svg";
import { Hooks } from 'providers';
function Header() {
    const { setToggle, toggle } = useContext(Hooks);
    return (
        <>
            <div className="header position-fixed">
                <div className="wrap d-flex justify-content-between w-100">
                    <div className="">
                        <img src={IconBri} alt="" srcset="" height={40} width={150} />
                    </div>
                    <div className="wrapBurger">
                        <div id="nav-icon1" className={`mr-2 ${toggle && 'open'}`} onClick={(e) => setToggle(!toggle)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header
