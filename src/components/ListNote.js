import React, { useContext } from "react";
import ItemNote from "./ItemNote";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

function ListNote({notes}) {
    const { locale } = useContext(LocaleContext);

    if(!notes.length) {
        return (
            <section className="notes-list-empty">
                <p className="notes-list__empty">
                    {locale === 'id' ? 'Catatan Kosong' : 'Blank Note'}
                </p>
            </section>
        );
    }

    return (
        <section className="notes-list">
            {notes.map((note) => (
                <ItemNote 
                key={note.id} 
                id={note.id} 
                title={note.title} 
                createdAt={note.createdAt} 
                body={note.body}/>
            ))}
        </section>
    );
}

ListNote.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ListNote;