import React from "react";

const pyramidsTypes = [3, 4, 8, 16, 32];

function HeaderTemplates({ setValuePyramid }) {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-4 text-white">
        {pyramidsTypes.map((types, i) => (
          <div key={i}>
            <a
              rel="noopener noreferrer"
              className=" bg-white/30 flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg"
            >
              <button onClick={() => setValuePyramid(types)}>
                Piramide {types}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderTemplates;
