import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext();
const Index = (props) => {

  const [activeTab, setActiveTab] = useState('home');
  const [toggle, setToggle] = useState(false)
  const [popUpRate, setPopUpRate] = useState(false);
  const valx = {
    activeTab, setActiveTab,
    toggle, setToggle,
    popUpRate, setPopUpRate
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
