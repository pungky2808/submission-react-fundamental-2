import React from "react";
import ActionButton from "./ActionButton";
import DeleteButton from "./DeleteButton";
import PropTypes from 'prop-types';

function DetailPageAction({id, archived, isArchived, onDelete}) {
    return (
        <div className="detail-page__action">
            <ActionButton id={id} archived={archived} isArchived={isArchived}/>
            <DeleteButton id={id} onDelete={onDelete} />
        </div>
    )
}

DetailPageAction.propTypes = {
    id: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    isArchived: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DetailPageAction;