import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.js";

import Main from "../pages/Main.js";
import Add from "../pages/Add.js";
import Edit from "../pages/Edit.js";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Router;
