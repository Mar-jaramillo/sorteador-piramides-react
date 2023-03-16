import React from "react";
import { handleCapture } from "../../utils/handleCapture";

const pyramidsTypes = [2,3, 4, 8, 16, 32];

function HeaderTemplates({ typePyramid, setTypePyramid }) {
  return (
    <div className="flex items-center justify-center gap-4 text-white">
      {pyramidsTypes.map((types, i) => (
        <div key={i}>
          <a className=" bg-white/30 flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg">
            <button onClick={() => setTypePyramid(types)}>
              Piramide {types}
            </button>
          </a>
        </div>
      ))}
      <button
        onClick={()=>handleCapture(typePyramid)}
        className="fixed bottom-5 bg-redbuttons text-white border right-5 max-w-sm px-2 py-3 rounded-md  "
      >
        Descargar Piramide
      </button>
    </div>
  );
}

export default HeaderTemplates;
