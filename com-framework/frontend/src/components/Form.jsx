import React, { useState, useEffect } from "react";
import FormButton from "./subcomponents/FormButton";
import FormField from "./subcomponents/FormField";

/**
 * @component Form
 * @description Form genérico dinâmico que renderiza campos a partir de um objeto de exemplo.
 * @param {string} btnTextContent - Texto do botão de envio.
 * @param {Object} exampleObject - Objeto exemplo com estrutura dos campos (ex: { nome: '', ativo: true, tipo: ['A', 'B', 'C'] }).
 * @param {Function} onSubmit - Função chamada ao enviar o formulário.
 * @param {Object} initialValues - Valores iniciais do formulário.
 * @return {JSX.Element}
 */
const Form = ({
  btnTextContent = "Salvar",
  exampleObject = {},
  onSubmit,
  initialValues = {},
}) => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  // Gera campos dinamicamente
  const processedFields = Object.entries(exampleObject)
    .filter(([key]) => key !== "id" && key !== "_id")
    .map(([key, value]) => {
      let type = "text";
      let options = null;

      if (Array.isArray(value)) {
        type = "select";
        options = value;
      } else if (typeof value === "boolean") type = "checkbox";
      else if (typeof value === "number") type = "number";
      else if (key.toLowerCase().includes("senha")) type = "password";
      else if (typeof value === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(value))
        type = "date";

      return {
        name: key,
        label: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        type,
        options,
      };
    });

  useEffect(() => {
    if (!exampleObject || typeof exampleObject !== "object" || Array.isArray(exampleObject)) {
      setError("Erro: formato inválido de campos. Ex: { nome: 'abc', valor: 5 }.");
    } else setError(null);
  }, [exampleObject]);

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues({ ...values, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      {processedFields.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={values[field.name]}
          onChange={handleChange}
        />
      ))}
      <FormButton text={btnTextContent} />
    </form>
  );
};

export default Form;
