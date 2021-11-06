import { GetAllAsset } from "api";
import React, { useState, useEffect, useContext, createContext } from "react";
import { useQuery } from "react-query";
export const Hooks = createContext(); //context === redux sama-sama state management
const Index = (props) => {
  const [activeTab, setActiveTab] = useState("home"); //state global -> js bukan strong types
  const [toggle, setToggle] = useState(false);

  const valx = {
    activeTab,
    setActiveTab,
    toggle,
    setToggle,
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
