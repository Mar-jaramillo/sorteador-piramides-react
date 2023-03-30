import React from "react";

const ListModal = ({ group }) => {
  return (
    <div className="border-white w-full text-sm overflow-auto fadeinfast">
      {group.length > 0 &&
        group.map((deportista, index) => (
          <p key={deportista["CodDep"]} className={`fade-in${index} border-b p-1`}>
            {deportista["Nombre Deportista"]}
          </p>
        ))}
    </div>
  );
};

export default ListModal;
