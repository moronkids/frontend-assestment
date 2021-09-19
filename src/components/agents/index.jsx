import { Hooks } from "providers";
import React, { useContext, useEffect, useState } from "react";
import Home from "components/agents/home";
import Profile from "components/agents/profile";
import { useLocation } from "react-router";

function Agent() {
  const loc = useLocation();
  return <>{loc.pathname === "/home" ? <Home /> : <Profile />}</>;
}

export default Agent;
