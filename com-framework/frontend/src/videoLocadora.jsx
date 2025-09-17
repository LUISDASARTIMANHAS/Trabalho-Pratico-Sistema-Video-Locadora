import React from "react";
import './css/videoLocadora.css';
import Header from "./components/Header.jsx";
import AppRoutes from "./routes/VideoLocadoraRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;