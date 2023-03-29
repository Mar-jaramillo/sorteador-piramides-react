import React from "react";
import { Link } from "react-router-dom";
import iconTemplate from "../../assets/icons/iconTemplate.svg";

export default function NavBar() {
  return (
    <nav className="col-span-8 flex justify-end  px-7 gap-10 items-center">
      <div className="flex gap-2">
        <img src={iconTemplate} alt="" />
        <Link className=" underline" to="/templates">
          Ver plantillas de pirámides
        </Link>
      </div>
    </nav>
  );
}
