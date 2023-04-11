import React from "react";
import { SeedItem } from "react-brackets";

export const ItemSeed = ({ seed, seedIndex }) => {
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

      <div className=" text-gray-700 rounded-md w-12  flex flex-col justify-around bg-white text-base ">
        <div>ID</div>
        <div className="mb-1 flex justify-center items-center rounded-md border-2 border-gray-400/50 bg-gray-200   w-full h-full ">
          {seed.teams[0].id || " "}
        </div>
        <div className=" flex h-full justify-center items-center  rounded-md border-2 border-gray-400/50 bg-gray-200 ">
          {seed.teams[1].id || " "}
        </div>
      </div>
      {/* box names */}

      <div
        className=" text-gray-700 text-base flex flex-col mr-2 "
        style={{ minWidth: "230px" }}
      >
        <div className="text-gray-700">{seedIndex}</div>
        <div className="mb-1 border-2  border-gray-400/50  rounded-md">
          <div className=" text-left flex items-center px-2 text-base  h-6 border-b border-gray-400/50  w-full">
            {seed.teams[0]?.name || ""}
            {/* {efectName0} */}
          </div>
          <div className="text-left flex items-center px-2  h-6   w-full rounded-md">
            {seed.teams[0]?.delegation || ""}
            {/* {efectDelegation0} */}
          </div>
        </div>
        <div className=" border-2 border-gray-400/50  rounded-md">
          <div className=" text-left flex items-center px-2   h-6 border-b border-gray-400/50 bg-white  w-full ">
            {seed.teams[1]?.name || " "}
            {/* {efectName1} */}
          </div>
          <div className="text-left flex items-center px-2   h-6    w-full ">
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
