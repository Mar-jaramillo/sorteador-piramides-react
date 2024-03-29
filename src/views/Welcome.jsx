import React, { useEffect } from "react";
import LoginForm from "../components/welcome/LoginForm";
import FooterLogosWelcome from "../components/welcome/FooterLogosWelcome";
import { useLocation } from "react-router-dom";
import { cleanData } from "../utils/cleanData";
 

export default function Welcome() {
  const { pathname } = useLocation();

 useEffect(() => {
cleanData()
  const changePageTitle = () => {
    const newPageTitle = "Sorteador - Bienvenido";
    pathname === "/" && (document.title = newPageTitle) 
  };
  changePageTitle()
 }, [])
 

  return (
    <div id="welcome" className="fadeinfast grid grid-cols-12 h-screen text-white">
      {/* section left */}
      <div className="col-span-6"></div>

      {/* section rigth */}
      <div className="col-span-6 flex flex-col justify-around h-full">

          <div></div>
          <LoginForm />
          <FooterLogosWelcome/>
    
        {/* section Logos */}
      </div>
    </div>
  );
}
