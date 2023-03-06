import React, { useContext, useState } from "react";
import { FiCheck } from 'react-icons/fi'; 
import LocaleContext from "../contexts/LocaleContext";
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types';

function InputNote({ addNote }) {
    const [title, onTitleChange] = useInput('');
    const [body, setBody] = useState('');
    const { locale } = useContext(LocaleContext);

    function onInputHandler(event) {
		setBody(event.target.innerHTML);
	}

	function onSubmitHandler() {
		addNote({ title, body });
	}

    return (
		<section className="add-new-page">
			<div className="add-new-page__input">
				<input
					type="text"
					className="add-new-page__input__title"
					placeholder={locale === "id" ? "Catatan rahasia" : "Secret Notes"}
					value={title}
					onChange={onTitleChange}
				/>
				<div
					className="add-new-page__input__body"
					contentEditable
					data-placeholder={locale === "id" ? "Sebenarnya saya adalah ...." : "Actually I am ...."}
					onInput={(e) => onInputHandler(e)}
				></div>
			</div>
			<div className="add-new-page__action">
				<button
					className="action hover:bg-emerald-600"
					type="button"
					title="Simpan"
					onClick={onSubmitHandler}
				>
					<FiCheck />
				</button>
			</div>
		</section>
	);
}

InputNote.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default InputNote;