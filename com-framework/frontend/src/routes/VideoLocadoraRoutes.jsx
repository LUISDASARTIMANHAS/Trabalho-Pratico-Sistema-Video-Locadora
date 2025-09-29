import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ListPage from "../pages/ListPage";
import NewPage from "../pages/NewPage";
import EditPage from "../pages/EditPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:moduleName" element={<ListPage />} />
      <Route path="/:moduleName/novo" element={<NewPage />} />
      <Route path="/:moduleName/editar" element={<EditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;