import React, { useContext, useEffect, useState } from "react";
import IconBri from "assets/img/icons/Bri-Link.svg";
import IconHome from "assets/img/icons/Home.svg";
import IconHomeWhite from "assets/img/icons/Home_w.svg";
import IconTransaction from "assets/img/icons/Transaction.svg";
import IconTransactionWhite from "assets/img/icons/Transaction_w.svg";
import IconProfile from "assets/img/icons/Profile.svg"
import IconProfileWhite from "assets/img/icons/Profile_w.svg"
import IconLogout from "assets/img/icons/Logout.svg"
import { Hooks } from "providers";

function Sidebar(props) {
    const { activeTab, setActiveTab } = useContext(Hooks);
    useEffect(() => {

    }, [localStorage.getItem('token')]);
    return (
        <div className="sidebar">
            {props.role === 'customer' ?
                <div className="sidebar__wrap-vertical">
                    <div className="">
                        <div className="position-relative">
                            <div
                                className={`iconBri position-absolute radiusBottomRight ${activeTab === 'home' ? `d-block` : `d-none`}`}
                                style={{ background: "#E5E5E5", height: '200px' }}
                            />
                            <div
                                className={`iconBri ${activeTab === "home" && "radius"
                                    } d-flex justify-content-center align-items-center position-relative`}
                            >
                                <img src={IconBri} alt="" srcset="" />
                            </div>
                        </div>

                        <div className="position-relative" onClick={(e) => setActiveTab('home')}>
                            <div
                                className={`iconBri position-absolute radiusBottomRightMini ${activeTab === 'transaction' ? `d-block` : `d-none`}`}
                                style={{ background: "#E5E5E5", height: '200px' }}
                            />
                            <div className={`iconMenus ${activeTab === 'home' && `active`} ${activeTab === "transaction" && "radius"
                                } d-flex justify-content-center align-items-center position-relative`}>
                                <img src={activeTab === 'home' ? IconHome : IconHomeWhite} alt="" />
                            </div>
                        </div>

                        <div className={`iconMenus ${activeTab === 'transaction' && `active`}  d-flex justify-content-center align-items-center position-relative`} onClick={(e) => setActiveTab('transaction')}>
                            <img src={activeTab === 'transaction' ? IconTransaction : IconTransactionWhite} alt="" />
                        </div>
                    </div>
                    <div className={`iconMenus ${activeTab === 'logout' && `active`} d-flex justify-content-center align-items-center position-relative`}>
                        <img src={IconLogout} alt="" onClick={() => { localStorage.removeItem('token'); window.location.href = "/login" }} />
                    </div>
                </div> : <div className="sidebar__wrap-vertical">
                    <div className="">
                        <div className="position-relative">
                            <div
                                className={`iconBri position-absolute radiusBottomRight ${activeTab === 'home' ? `d-block` : `d-none`}`}
                                style={{ background: "#E5E5E5", height: '200px' }}
                            />
                            <div
                                className={`iconBri ${activeTab === "home" && "radius"
                                    } d-flex justify-content-center align-items-center position-relative`}
                            >
                                <img src={IconBri} alt="" srcset="" />
                            </div>
                        </div>

                        <div className="position-relative" onClick={(e) => setActiveTab('home')}>
                            <div
                                className={`iconBri position-absolute radiusBottomRightMini ${activeTab === 'profile' ? `d-block` : `d-none`}`}
                                style={{ background: "#E5E5E5", height: '200px' }}
                            />
                            <div className={`iconMenus ${activeTab === 'home' && `active`} ${activeTab === "profile" && "radius"
                                } d-flex justify-content-center align-items-center position-relative`}>
                                <img src={activeTab === 'home' ? IconHome : IconHomeWhite} alt="" />
                            </div>
                        </div>

                        <div className={`iconMenus ${activeTab === 'profile' && `active`}  d-flex justify-content-center align-items-center position-relative`} onClick={(e) => setActiveTab('profile')}>
                            <img src={activeTab === 'profile' ? IconProfile : IconProfileWhite} alt="" />
                        </div>
                    </div>
                    <div className={`bro iconMenus ${activeTab === 'logout' && `active`} d-flex c justify-content-center align-items-center position-relative`}>
                        <img src={IconLogout} alt="" onClick={() => { localStorage.removeItem('token'); window.location.href = "/login" }} />
                    </div>
                </div>}
        </div>
    );
}

export default Sidebar;
