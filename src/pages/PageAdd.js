import React from "react";
import InputNote from "../components/InputNote";
import {addNote} from '../utils/api';
import { useNavigate } from "react-router-dom";

function PageAdd() {
    const navigate = useNavigate();

    async function onAddNote(note) {
        await addNote(note);
        navigate('/');
    }

    return (
        <InputNote addNote={onAddNote}/>
    )
}

export default PageAdd;