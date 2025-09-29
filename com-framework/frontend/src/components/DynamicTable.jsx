// src/components/DynamicTable.jsx
import React from "react";

const DynamicTable = ({ data, fields }) => {
  if (!data || data.length === 0)
    return <p className="text-muted">Nenhum dado disponível.</p>;

  const detectedFields = fields || Object.keys(data[0]);

  return (
    <table className="table table-striped table-bordered table-hover">
      <thead className="table-dark">
        <tr>
          {detectedFields.map((field) => (
            <th key={field}>
              {field.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {detectedFields.map((field) => (
              <td key={field}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;