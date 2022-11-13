import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout/Layout.js";
import Read from "../pages/Read.js";
import Add from "../pages/Add.js";
import Edit from "../pages/Edit.js";
import Delete from "../pages/Delete.js";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Read />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/delete" element={<Delete />} />
      </Route>
    </Routes>
  );
};

export default Router;
