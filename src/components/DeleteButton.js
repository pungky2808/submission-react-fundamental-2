import React from "react";
import {MdOutlineDelete} from 'react-icons/md';
import PropTypes from 'prop-types';

function DeleteButton({id, onDelete}) {
    return(
        <button className="action hover:bg-red-500" 
            type="button" title="Hapus"
			onClick={() => onDelete(id)}>
			<MdOutlineDelete />
		</button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;