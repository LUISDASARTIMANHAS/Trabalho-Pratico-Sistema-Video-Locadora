// src/pages/ListPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import modules from "../js/config/modules.js";
import DynamicTable from "../components/DynamicTable";

const ListPage = () => {
  const { moduleName } = useParams();

  const moduleConfig = modules.find(mod => mod.name === moduleName);

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
