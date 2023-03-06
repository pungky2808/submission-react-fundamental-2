import React, {useState, useEffect, useContext} from "react";
import ListNote from "../components/ListNote";
import SearchNote from "../components/SearchNote";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { searchNotes } from "../utils/local-data";
import { getArchivedNotes } from '../utils/api';

function PageArchive() {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get("title");

	const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
	const [keyword, setKeyword] = useState(title || "");
	const { locale } = useContext(LocaleContext);

	useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
		});
	}, []);

	function onSearch(keyword) {
		setSearchParams({ title: keyword });
		setKeyword(keyword);
	}

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 250)

    }, [])

    if (loading) {
        return (
            <Loading/>
        )
    }

	const filteredNotes = searchNotes(notes, keyword);
	return (
		<section className="archives-page">
			<h2 className="text-2xl font-bold">{locale === "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
			<SearchNote onSearch={onSearch} />
			<ListNote notes={filteredNotes} />
		</section>
	);
}

export default PageArchive;