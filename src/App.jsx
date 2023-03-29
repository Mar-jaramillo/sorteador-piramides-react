import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getLocalStorage } from "./utils/getLocalStorage";
import GlobalContext from "./utils/GlobalContext";
import Board from "./views/Board";
import DataTable from "./views/DataTable";
import Home from "./views/Home";
import Print from "./views/Print";
import Templates from "./views/Templates";
import Welcome from "./views/Welcome";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/board", element: <Board /> },
  { path: "/data", element: <DataTable /> },
  { path: "/print", element: <Print /> },
  { path: "/templates", element: <Templates /> },
];

export default function App() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");
  useEffect(() => localStorage.setItem("isLogin", isLogin), [isLogin]);

  const dataContext = {
    onLogin: () => setIsLogin(true), //
    nameEvent : "", // Se espera el nombre del evento 
    totalGroups: 0, // Se espera el total de los grupos generados =>
    totalDelegations: 0, // Se espera el total de delegaciones de los participantes
    groupsByCode: {}, // Se espera un objeto de los grupos de deportistas por codigo
    keysOfGroups: [], // Se espera un array los codigos CBTE-IN de los grupos de deportistas
    valuesUniques: {}, // Se espera un objeto con valores unicos de las propiedades de todos los deportistas
    typePyramid: 0, //Se espera el tipo de piramide a usar 2, 3, 4, 8, 16, 32
    totalGroupsFiltered: 0, //Se espera un numero que varia dependiendo la busqueda en los selects
    keyNameNow: "", //Se espera el nombre del codigo del grupo seleccionado
    raffledCards: [],
    cardsNotRaffled: [],
    groupNow: {},
  };

  return (
    <GlobalContext.Provider value={dataContext}>
      <BrowserRouter>
        <Routes>
            <Route
              path="/"
              element={<Welcome /> }
            />
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={isLogin ? element : <Navigate to="/" />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
