import React from "react";

const ListModal = ({ group }) => {
  return (
    <div className="border-white w-full text-sm overflow-auto">
      {group.length > 0 &&
        group.map((deportista, index) => (
          <p key={deportista["CBTE IND"]} className={`fade-in${index} border-b p-1`}>
            {deportista["Nombre Deportista"]}
          </p>
        ))}
    </div>
  );
};

export default ListModal;
