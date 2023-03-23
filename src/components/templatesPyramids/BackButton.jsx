import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="grid place-content-center">
      <button
        onClick={() => navigate("/board")}
        className="w-40 border py-2 bg-white/25   transition duration-500 ease-in-out  rounded-lg"
      >
        {" "}
        &lt;&lt; Volver
      </button>
    </div>
  );
}
