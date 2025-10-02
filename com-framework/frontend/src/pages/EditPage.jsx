import React, { useState } from "react";
import ConfirmModal from "../components/ConfirmModal.jsx";
import { Link } from "react-router-dom";
import Form from "../components/Form.jsx";
import { extractKeys, getItemFromId, getTitleItem } from "../js/utils.js";
import { update } from "../service/api.js";

const EditPage = ({ moduleConfig, id }) => {
  const [showModal, setShowModal] = useState(false);
  const atualItem = getItemFromId(id, moduleConfig.data); // Ajuste para acessar o item correto
  const [initialValues, setInitialValues] = useState({
    ...getItemFromId(id, moduleConfig.data), // pega todos os campos
  });
  console.log("atualItem:", atualItem);
  const [formData, setFormData] = useState(null);

  console.log("moduleConfig em EditPage:", moduleConfig);
  const handleFormSubmit = (data) => {
    console.log("[EditPage] Dados do form:", data);
    setFormData(data); // salva os dados do form
    setShowModal(true); // abre modal de confirmação
  };

  const handleConfirm = async () => {
    try {
      console.log("[HANDLE_CONFIRM] Atualizando item:", formData);
      await update(moduleConfig.name, id, formData); // usa moduleConfig.name como endpoint
      console.log("[HANDLE_CONFIRM] Item salvo com sucesso!");
      setShowModal(false);
    } catch (err) {
      console.error("[HANDLE_CONFIRM] Erro ao salvar item:", err);
      setShowModal(false);
    }
  };

  return (
    <div className="container flex flex-column align-items-center">
      <h2>Editar {moduleConfig.label}</h2>
      <Link
        to={`/${moduleConfig.name}/novo`}
        style={{ display: "inline-block", marginBottom: "20px" }}
      >
        + Inserir novos {moduleConfig.label}
      </Link>

      <Form
        btnTextContent="Editar"
        exampleObject={atualItem}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      />

      <ConfirmModal
        show={showModal}
        title="Confirmação"
        message={`Deseja realmente editar ${getTitleItem(atualItem)} para ${getTitleItem(formData)}?`}
        onConfirm={handleConfirm}
        onCancel={() => setShowModal(false)}
      />
    </div>
  );
};

export default EditPage;
