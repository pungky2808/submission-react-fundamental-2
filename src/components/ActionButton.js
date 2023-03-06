import React from "react";
import PropTypes from 'prop-types';
import { BsFolderCheck, BsFolderX } from "react-icons/bs";

function ActionButton({id, archived, isArchived}) {
    if(archived) {
        return (
            <button className="action hover:bg-emerald-600" 
            type="button" title="Unarchive" 
            onClick={() => isArchived(id)}><BsFolderX/></button>
        )
    }

    return (
        <button className="action hover:bg-emerald-600" 
        type="button" title="Archive" 
        onClick={() => isArchived(id)}><BsFolderCheck/></button>
    )
}

ActionButton.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    isArchived: PropTypes.func.isRequired
}

export default ActionButton;
