import React, { useContext } from "react";
import PropTypes from 'prop-types';
import LocaleContext from "../contexts/LocaleContext";

function SearchNote({ onSearch }) {
    const { locale } = useContext(LocaleContext);

    return (
        <section className="search-bar">
			<input type="text"
				placeholder={
					locale === "id" ? 
                        "Cari berdasarkan judul ..." : "Search by title ..."
				}
				onChange={(e) => onSearch(e.target.value)}
			/>
		</section>
	);
}

SearchNote.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchNote;