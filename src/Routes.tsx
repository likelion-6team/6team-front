import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";

export interface RouteProps {
  path: string;
  element: ReactNode;
}

export const routes: RouteProps[] = [
  { path: "/", element: <Home /> },
  { path: "/search/:stuff", element: <Search /> },
];

const RoutesSetting = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);

export default RoutesSetting;
