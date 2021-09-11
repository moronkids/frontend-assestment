import React, { useContext, useEffect, useState } from "react";
import IconBri from "assets/img/icons/Bri-Link.svg";
import IconHome from "assets/img/icons/Home.svg";
import IconHomeWhite from "assets/img/icons/Home_w.svg";
import IconTransaction from "assets/img/icons/Transaction.svg";
import IconTransactionWhite from "assets/img/icons/Transaction_w.svg";
import IconProfile from "assets/img/icons/Profile.svg";
import IconProfileWhite from "assets/img/icons/Profile_w.svg";
import IconLogout from "assets/img/icons/Logout.svg";
import { Hooks } from "providers";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Sidebar(props) {
  const { activeTab, setActiveTab } = useContext(Hooks);
  // eslint-disable-next-line no-undef
  const loc = useLocation();
  useEffect(() => {}, [localStorage.getItem("token")]);
  // console.log(loc.pathname.split('/'))
  return (
    <div className="sidebar">
      {props.role === "customer" ? (
        <div className="sidebar__wrap-vertical">
          <div className="">
            <Link to="/home">
              <div className="position-relative">
                <div
                  className={`iconBri position-absolute radiusBottomRight ${
                    loc.pathname === "/home" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#E5E5E5", height: "200px" }}
                />
                <div
                  className={`iconBri ${
                    loc.pathname === "/home" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img src={IconBri} alt="" srcset="" />
                </div>
              </div>
            </Link>

            <Link to="/home">
              <div
                className="position-relative"
                onClick={(e) => setActiveTab("home")}
              >
                <div
                  className={`iconBri position-absolute radiusBottomRightMini ${
                    activeTab === "transaction" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#E5E5E5", height: "200px" }}
                />
                <div
                  className={`iconMenus ${
                    loc.pathname === "/home" && `active`
                  } ${
                    activeTab === "transaction" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img
                    src={loc.pathname === "/home" ? IconHome : IconHomeWhite}
                    alt=""
                  />
                </div>
              </div>
            </Link>

            <Link to="/transaction">
              <div
                className={`iconMenus ${
                  (loc.pathname === "/transaction" ||
                    loc.pathname.split("/")[1] === "transaction") &&
                  `active`
                }  d-flex justify-content-center align-items-center position-relative`}
                onClick={(e) => setActiveTab("transaction")}
              >
                <img
                  src={
                    loc.pathname === "/transaction" ||
                    loc.pathname.split("/")[1] === "transaction"
                      ? IconTransaction
                      : IconTransactionWhite
                  }
                  alt=""
                />
              </div>
            </Link>
          </div>
          <Link to="/">
            <div
              className={`iconMenus ${
                activeTab === "logout" && `active`
              } d-flex justify-content-center align-items-center position-relative`}
            >
              <img
                src={IconLogout}
                alt=""
                onClick={() => {
                  localStorage.removeItem("token");
                  loc.href = "/login";
                }}
              />
            </div>
          </Link>
        </div>
      ) : (
        <div className="sidebar__wrap-vertical">
          <div className="">
            <Link to="/home">
              <div className="position-relative">
                <div
                  className={`iconBri position-absolute radiusBottomRight ${
                    loc.pathname === "/home" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#E5E5E5", height: "200px" }}
                />
                <div
                  className={`iconBri ${
                    loc.pathname === "/home" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img src={IconBri} alt="" srcset="" />
                </div>
              </div>
            </Link>

            <Link to="/home">
              <div
                className="position-relative"
                onClick={(e) => setActiveTab("home")}
              >
                <div
                  className={`iconBri position-absolute radiusBottomRightMini ${
                    loc.pathname === "/profile" ? `d-block` : `d-none`
                  }`}
                  style={{ background: "#E5E5E5", height: "200px" }}
                />
                <div
                  className={`iconMenus ${
                    loc.pathname === "/home" && `active`
                  } ${
                    loc.pathname === "/profile" && "radius"
                  } d-flex justify-content-center align-items-center position-relative`}
                >
                  <img
                    src={loc.pathname === "/home" ? IconHome : IconHomeWhite}
                    alt=""
                  />
                </div>
              </div>
            </Link>

            <Link to="/profile">
              <div
                className={`iconMenus ${loc.pathname === "/profile" && `active`}
                        d-flex justify-content-center align-items-center position-relative`}
                onClick={(e) => setActiveTab("profile")}
              >
                <img
                  src={
                    loc.pathname === "/profile" ? IconProfile : IconProfileWhite
                  }
                  alt=""
                />
              </div>
            </Link>
          </div>
          <Link to="/login">
            <div
              className={`bro iconMenus ${
                activeTab === "logout" && `active`
              } d-flex c justify-content-center align-items-center position-relative`}
            >
              <img
                src={IconLogout}
                alt=""
                onClick={() => {
                  localStorage.removeItem("token");
                  loc.href = "/login";
                }}
              />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
