import React, { useEffect } from "react";
import LoginForm from "../components/welcome/LoginForm";
import FooterLogosWelcome from "../components/welcome/FooterLogosWelcome";
import { useLocation } from "react-router-dom";

export default function Welcome() {
  const { pathname } = useLocation();

 useEffect(() => {
  const changePageTitle = () => {
    const newPageTitle = "Sorteador - Bienvenido";
    pathname === "/" && (document.title = newPageTitle) 
  };
  changePageTitle()
 }, [])
 

  return (
    <div id="welcome" className="grid grid-cols-12 h-screen text-white">
      {/* section left */}
      <div className="col-span-6"></div>

      {/* section rigth */}
      <div className="col-span-6 flex flex-col justify-end h-full">
        <div className="flex flex-col justify-between items-center py-12">
          <LoginForm />
          <FooterLogosWelcome />
        </div>
        {/* section Logos */}
      </div>
    </div>
  );
}
