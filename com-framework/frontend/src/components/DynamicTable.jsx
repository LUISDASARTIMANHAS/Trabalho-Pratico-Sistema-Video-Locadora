// src/components/DynamicTable.jsx
import React from "react";

const DynamicTable = ({ data, fields }) => {
  if (!data || data.length === 0) return <p>Nenhum dado disponível.</p>;

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          {fields.map((field) => (
            <th key={field}>{field.toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            {fields.map((field) => (
              <td key={field}>{item[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
