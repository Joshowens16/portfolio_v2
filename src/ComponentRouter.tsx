import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";

const ComponentRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
};

export default ComponentRouter;
