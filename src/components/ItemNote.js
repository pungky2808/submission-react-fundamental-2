import React from "react";
import {showFormattedDate} from '../utils';
import {Link} from 'react-router-dom';
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

function ItemNote({id, title, createdAt, body}) {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`} className= "text-2xl font-bold cursor-pointer hover:underline">{title}</Link>
            </h3>
            <p className="note-item__createdAt">
                {showFormattedDate(createdAt)}
            </p>
            <p className="note-item__body">{parser(body)}</p>
        </article>
    )
}

ItemNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default ItemNote;
