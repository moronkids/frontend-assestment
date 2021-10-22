import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext();
const Index = (props) => {
  const [activeTab, setActiveTab] = useState("home");
  const [toggle, setToggle] = useState(false);
  const [popUpRate, setPopUpRate] = useState(false);
  const [details, setDetails] = useState(false);
  const [agent, setAgent] = useState(false);
  const [id, setId] = useState("");
  const [rateCustomer, setRateCustomer] = useState("");
  const [idTrx, setIdTrx] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [action, setAction] = useState("");
  const valx = {
    agent,
    setAgent,
    rateCustomer,
    setRateCustomer,
    activeTab,
    setActiveTab,
    toggle,
    setToggle,
    popUpRate,
    setPopUpRate,
    details,
    setDetails,
    id,
    setId,
    idTrx,
    setIdTrx,
    confirmation,
    setConfirmation,
    action,
    setAction,
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
