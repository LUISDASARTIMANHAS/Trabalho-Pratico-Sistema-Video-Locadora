import React from "react";
import './css/videoLocadora.css';
import Header from "./components/Header.jsx";
import AppRoutes from "./routes/VideoLocadoraRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside.jsx";

const VideoLocadora = () => {
  const asideLinks = [
    { path: "/", label: "Início" },
    { path: "/ator", label: "Atores" },
    { path: "/series", label: "Séries" },
    { path: "/favoritos", label: "Favoritos" },
    { path: "/contato", label: "Contato" }
  ];

  return (
    <BrowserRouter>
      <Header />
      <Aside links={asideLinks} />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default VideoLocadora;
