// src/VideoLocadora.jsx
import React from "react";
import './css/videoLocadora.css';
import Header from "./components/Header.jsx";
import AppRoutes from "./routes/VideoLocadoraRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import Aside from "./components/Aside.jsx";
import modules from "./js/config/modules.js"; // ✅
import { initData } from "./service/api.js";

const VideoLocadora = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await initData(); // força carregar todos os dados antes de continuar
      setLoaded(true);
    })();
  }, []);

  if (!loaded) return <p>Carregando...</p>;


  const asideLinks = [
    { path: "/", label: "Início" },
    ...modules.flatMap(({ name, label }) => [
      { path: `/${name}`, label },
      { path: `/${name}/novo`, label: `Novo ${label}` },
      { path: `/${name}/editar`, label: `Editar ${label}` }
    ])
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
