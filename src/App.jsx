import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );

  useEffect(() => localStorage.setItem("isLogin", isLogin), [isLogin]);

  const authValue = {
    onLogin: () => setIsLogin(true),
    amountParticipants : 0,
    groupNow :{},
    typePyramid :0,

  };

  return (
    <GlobalContext.Provider value={authValue}>
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
