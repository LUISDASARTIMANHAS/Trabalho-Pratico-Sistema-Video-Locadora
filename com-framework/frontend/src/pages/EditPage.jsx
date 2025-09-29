import React, { useState } from "react";
import ConfirmModal from "../components/ConfirmModal.jsx";

const EditPage = () => {
	const [showModal, setShowModal] = useState(false);

	const handleSave = () => {
		// chama o modal antes de salvar
		setShowModal(true);
	};

	return (
		<div>
			<h2>Editar Item</h2>
			<button className="btn btn-success" onClick={handleSave}>
				Salvar
			</button>

			<ConfirmModal
				show={showModal}
				title="Confirmação"
				message="Deseja realmente salvar?"
				onConfirm={() => {
					console.log("Item salvo!");
					setShowModal(false);
				}}
				onCancel={() => setShowModal(false)}
			/>
		</div>
	);
};

export default EditPage;
