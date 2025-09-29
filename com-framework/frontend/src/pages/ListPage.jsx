// src/pages/ListPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import DynamicTable from "../components/DynamicTable";
import { findModuleConfig } from "../js/utils.js";

const ListPage = () => {
  const params  = useParams();
  const { moduleName } = params;
  window.findModuleConfig = findModuleConfig; // debugging
  console.log("Rendering ListPage for module:", params);
  const moduleConfig = findModuleConfig(moduleName);

  if (!moduleConfig) return <h2>Módulo não encontrado: {moduleName}</h2>;

  return (
    <div>
      <h1>Lista de {moduleConfig.label}</h1>
      <Link
        to={`/${moduleConfig.name}/novo`}
        style={{ display: "inline-block", marginBottom: "20px" }}
      >
        + Novo {moduleConfig.label}
      </Link>

      <DynamicTable data={moduleConfig.data} fields={moduleConfig.fields} />
    </div>
  );
};

export default ListPage;
