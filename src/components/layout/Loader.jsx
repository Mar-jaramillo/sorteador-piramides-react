import React from "react";

export default function Loader({mensaje}) {
  return (
    <>
       <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center ">
       <svg
        className="animate-spin h-12 w-12"
        viewBox="0 0 24 24"
        style={{ animationDuration: "0.75s" }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="1">
            <stop offset="0%" stopColor="#FF3602" />
            <stop offset="100%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="url(#gradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="80 50"
        />
      </svg>
        <span className="mt-10 text-white">{mensaje}</span>
        </div>

 
    </>
  );
}
