import React from "react";
import Menu from "../components/Menu";
import ToDo from "../components/ToDo";
import Basket from "../components/Basket";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  let PATH = [
    {
      id: 1,
      link: "/",
      element: <Menu />,
    },
    {
      id: 2,
      link: "/todo",
      element: <ToDo />,
    },
    {
      id: 3,
      link: "/basket",
      element: <Basket />,
    },
  ];
  return (
      <Routes>
        {PATH.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
  );
};

export default MainRoutes;
