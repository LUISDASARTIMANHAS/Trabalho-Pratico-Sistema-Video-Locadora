// src/routes/VideoLocadoraRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import modules from "../js/config/modules.js";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ListPage from "../pages/ListPage";
import NewPage from "../pages/NewPage";
import EditPage from "../pages/EditPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {modules.map(({ name, label }) => (
        <React.Fragment key={name}>
          <Route path={`/${name}`} element={<ListPage />} />
          <Route path={`/${name}/novo`} element={<NewPage moduleName={name} />} />
          <Route path={`/${name}/editar/:id`} element={<EditPage moduleName={name} />} />
        </React.Fragment>
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
