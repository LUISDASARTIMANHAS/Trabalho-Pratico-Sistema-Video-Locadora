// src/js/ModuleWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { findModuleConfig } from "../js/utils";

const ModuleWrapper = ({ children }) => {
	const { moduleName } = useParams();
	const moduleConfig = findModuleConfig(moduleName);

	if (!moduleConfig) {
		// JSX de fallback quando o módulo não é encontrado
		return (
			<div className="p-3">
				<h2 className="text-danger">Módulo não encontrado: {moduleName}</h2>
			</div>
		);
	}

	// Passa moduleConfig como prop para o componente filho
	return React.cloneElement(children, { moduleConfig });
};

export default ModuleWrapper;
