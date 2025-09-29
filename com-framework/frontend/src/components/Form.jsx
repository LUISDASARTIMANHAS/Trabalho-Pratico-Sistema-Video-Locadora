// src/components/Form.jsx
import React, { useState, useEffect } from "react";

const Form = ({ fields, onSubmit, initialValues = {} }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      {fields.map((field) => (
        <div className="mb-3" key={field.name}>
          <label htmlFor={field.name} className="form-label">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            className="form-control"
            value={values[field.name] || ""}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Salvar
      </button>
    </form>
  );
};

export default Form;