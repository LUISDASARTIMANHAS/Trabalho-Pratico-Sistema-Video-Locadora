import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import CheckboxField from "./CheckboxField";
import RadioGroupField from "./RadioGroupField";

const FormField = ({ field, value, onChange }) => {
	const { name, label, type, options, required=true } = field;

	switch (type) {
		case "select":
			return (
				<SelectField
					name={name}
					label={label}
					options={options}
					value={value}
					onChange={onChange}
					required={required}
				/>
			);

		case "radio":
			return (
				<RadioGroupField
					name={name}
					label={label}
					options={options}
					value={value}
					onChange={onChange}
					required={required}
				/>
			);

		case "checkbox":
			return (
				<CheckboxField
					name={name}
					label={label}
					checked={value}
					onChange={onChange}
					required={required}
				/>
			);

		default:
			return (
				<InputField
					name={name}
					label={label}
					type={type}
					value={value}
					onChange={onChange}
					required={required}
				/>
			);
	}
};

export default FormField;
