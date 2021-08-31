import React, { useState, useEffect, useContext, createContext } from "react";
export const Hooks = createContext();
const Index = (props) => {

 const [activeTab, setActiveTab] = useState('home');
  const valx = {
    activeTab, setActiveTab
  };
  return <Hooks.Provider value={valx}>{props.children}</Hooks.Provider>;
};

export default Index;
