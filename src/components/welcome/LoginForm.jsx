import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KEY_ACCESS } from "../../consts/keysAccess";
import GlobalContext from "../../utils/GlobalContext";
import iconhapkido from "../../assets/icons/iconhapkido.svg";

export default function LoginForm() {
  
  const context = useContext(GlobalContext);
  const [value, setValues] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (KEY_ACCESS.includes(value)) {
      context.onLogin();
      navigate("/home");
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center mb-28">
    <img className="h-12 mb-4" src={iconhapkido} alt="" />
    <p className="text-center font-bold text-2xl mb-10  max-w-md">
      Bienvenido al Sorteador de Pirámides de Competencias para Hapkido
    </p>
    <form onSubmit={handleSubmit} className="flex flex-col">
      <h1 className="text-md text-left mb-3 font-normal">
        Ingrese su código de acceso
      </h1>

      <div className="flex">
        <div className="flex flex-col w-60">
          <input
            onChange={(e) => setValues(e.target.value)}
            placeholder="Código de acceso"
            className="rounded-xl text-lg border-2 h-12  px-2 right-10 border-white bg-blueSecondary/50"
            type="text"
          />
          {error ? (
            <span className="text-yellow-500 text-sm py-1 mb-3">
              Clave de acceso incorrecta, por favor inténtalo nuevamente.
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="mx-2 px-10 rounded-lg mb-5 border-2 h-12 font-medium border-redborderbuttons bg-redbuttons"
        >
          Ingresar
        </button>
      </div>
    </form>
    </div>
  );
}
