import React from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from 'react-icons/fi';

function HomePageAction() {
    const navigate = useNavigate();

    return (
        <div className="homepage__action">
            <button className="action hover:bg-emerald-600" 
                type="button" title="Add" 
                onClick={() => navigate('/notes/new')}>
                <FiPlus/>
            </button>
        </div>
    );
}

export default HomePageAction;