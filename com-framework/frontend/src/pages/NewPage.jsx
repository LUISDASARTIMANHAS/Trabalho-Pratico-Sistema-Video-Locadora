import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form.jsx";
import ConfirmModal from "../components/ConfirmModal.jsx";
import { create } from "../service/api.js";
import { getItemFromId, getTitleItem } from "../js/utils.js";

const NewPage = ({ moduleConfig }) => {
	const [showModal, setShowModal] = useState(false);
	const [initialValues, setInitialValues] = useState(
		getItemFromId(0, moduleConfig.data) || {}
	);
	const [formData, setFormData] = useState(null);

	console.log("moduleConfig em NewPage:", moduleConfig);
	const handleFormSubmit = (data) => {
		console.log("[NewPage] Dados do form:", data);
		setFormData(data); // salva os dados do form
		setShowModal(true); // abre modal de confirmação
	};

	const handleConfirm = async () => {
		try {
			console.log("[NewPage] Criando item:", formData);
			await create(moduleConfig.name, formData); // usa moduleConfig.name como endpoint
			console.log("Item salvo com sucesso!");
			setShowModal(false);
		} catch (err) {
			console.error("Erro ao salvar item:", err);
			setShowModal(false);
		}
	};

	return (
		<div>
			<h2>Inserir novos {moduleConfig.label}</h2>

			<Link
				to={`/${moduleConfig.name}`}
				style={{ display: "inline-block", marginBottom: "20px" }}
			>
				+ Ver {moduleConfig.label}
			</Link>

			<Form
				btnTextContent={`Inserir ${moduleConfig.label}`}
				exampleObject={moduleConfig.data?.[0]}
				onSubmit={handleFormSubmit}
				initialValues={initialValues}
			/>

			<ConfirmModal
				show={showModal}
				title="Confirmação"
				message={`Deseja realmente inserir ${getTitleItem(formData)}?`}
				onConfirm={handleConfirm}
				onCancel={() => setShowModal(false)}
			/>
		</div>
	);
};

export default NewPage;
