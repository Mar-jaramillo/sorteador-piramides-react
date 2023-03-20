import React from "react";
import LoginForm from "../components/welcome/LoginForm";
import FooterLogosWelcome from "../components/welcome/FooterLogosWelcome";

export default function Welcome() {
  return (
    <div id="welcome" className="grid grid-cols-12 h-screen text-white">
      {/* section left */}
      <div className="col-span-6"></div>
      
      {/* section rigth */}
      <div className="col-span-6 flex flex-col justify-end h-full">
        <div className="flex flex-col justify-between items-center py-12 h-full">
          <LoginForm />
          <FooterLogosWelcome />
        </div>
        {/* section Logos */}
      </div>
    </div>
  );
}
