// src/components/DynamicTable.jsx
import React from "react";

const DynamicTable = ({ data, fields }) => {
  console.log("DynamicTable received data:", data);

  if (!data || data.length === 0) return <p>Nenhum dado disponível.</p>;

  // Se fields não for passado, tenta descobrir os campos a partir do primeiro item
  const detectedFields = fields || Object.keys(data[0]);

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          {detectedFields.map((field) => (
            <th key={field}>
              {field
                .replace(/_/g, " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
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
