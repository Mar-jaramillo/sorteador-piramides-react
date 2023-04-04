import React from "react";
import { SeedItem } from "react-brackets";

export const ItemSeed = ({ seed }) => {
  return (
    <SeedItem 
      className=" item flex justify-between w-full shadow-none bg-white "
      style={{
        boxShadow: "none",
        backgroundColor: "white",
        minWidth: "0px",
      }}
    >
      {/* box id */}

      <div className=" text-gray-700   rounded-md w-12 flex flex-col justify-around bg-white ">
        <div>ID</div>
        <div className=" mb-1 flex justify-center items-center rounded-md border-2 border-gray-400/50 bg-gray-200  h-full w-full text-xs">
          {seed.teams[0].id || " "}
        </div>
        <div className="  flex w-12 justify-center items-center h-full rounded-md border-2 border-gray-400/50 bg-gray-200 text-xs">
          {seed.teams[1].id || " "}
        </div>
      </div>
      {/* box names */}

      <div
        className=" text-gray-700  flex flex-col mr-2"
        style={{ minWidth: "170px" }}
      >
        <div className="text-white">Deportistas</div>
        <div className="  mb-1 border-2  border-gray-400/50  rounded-md">
          <div className=" text-left flex items-center px-2 text-xs  h-6 border-b border-gray-400/50  w-full">
            {seed.teams[0]?.name || ""}
            {/* {efectName0} */}
          </div>
          <div className="text-left flex items-center px-2 text-xs  h-6   w-full rounded-md">
            {seed.teams[0]?.delegation || ""}
            {/* {efectDelegation0} */}
          </div>
        </div>
        <div className="   border-2 border-gray-400/50  rounded-md">
          <div className=" text-left flex items-center px-2 text-xs   h-6 border-b border-gray-400/50 bg-white  w-full ">
            {seed.teams[1]?.name || " "}
            {/* {efectName1} */}
          </div>
          <div className="text-left flex items-center px-2 text-xs  h-6    w-full ">
            {seed.teams[1]?.delegation || ""}
            {/* {efectDelegation1} */}
          </div>
        </div>
      </div>

      {/* box puntos */}

      <div className=" text-gray-700   w-12 flex flex-col justify-around bg-white   rounded-md border-gray-400/50">
        <div>PTS</div>
        <div className="mb-1 flex justify-center items-center  border-2 border-gray-400/50 h-full w-full rounded-md"></div>
        <div className=" flex justify-center items-center border-2 border-gray-400/50  h-full w-full rounded-md"></div>
      </div>
    </SeedItem>
  );
};
