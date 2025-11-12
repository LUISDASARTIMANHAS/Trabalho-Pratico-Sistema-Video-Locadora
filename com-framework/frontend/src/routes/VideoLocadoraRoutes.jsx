// src/routes/VideoLocadoraRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ModuleWrapper from "../components/ModuleWrapper";
import ErrorBoundary from "../components/ErrorBoundary"; // ⚠️ Importa o ErrorBoundary
import PrivateRoute from "./PrivateRoute";

// pages
import NotFound from "../pages/NotFound";
import ListPage from "../pages/ListPage";
import EditPage from "../pages/EditPage";
import NewPage from "../pages/NewPage";
import AuthPage from "../pages/auth/AuthPage";
import PesquisarPage from "../pages/search/pesquisarPage.jsx";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />

      {/* Home protegido */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />

      {/* Rotas dinâmicas de módulos protegidas */}
      <Route
        path="/:moduleName"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <ModuleWrapper>
                <ListPage />
              </ModuleWrapper>
            </ErrorBoundary>
          </PrivateRoute>
        }
      />

      <Route
        path="/:moduleName/novo"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <ModuleWrapper>
                <NewPage />
              </ModuleWrapper>
            </ErrorBoundary>
          </PrivateRoute>
        }
      />

      <Route
        path="/:moduleName/editar/:id"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <ModuleWrapper>
                <EditPage />
              </ModuleWrapper>
            </ErrorBoundary>
          </PrivateRoute>
        }
      />

      <Route
        path="/search"
        element={
          <PrivateRoute>
            <ErrorBoundary>
              <ModuleWrapper>
                <PesquisarPage />
              </ModuleWrapper>
            </ErrorBoundary>
          </PrivateRoute>
        }
      />

      {/* Página 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;