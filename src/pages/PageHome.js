import React, { useContext, useEffect, useState } from "react";
import HomePageAction from "../components/HomePageAction";
import ListNote from "../components/ListNote";
import SearchNote from "../components/SearchNote";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";
import { useSearchParams } from "react-router-dom";
import { searchNotes } from "../utils/local-data";
import { getActiveNotes } from "../utils/api";

function PageHome() {
	const [searchParams, setSearchParams] = useSearchParams();
	const title = searchParams.get("title");

	const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false)
	const [keyword, setKeyword] = useState(title || "");
	const { locale } = useContext(LocaleContext);

	useEffect(() => {
		getActiveNotes().then(({ data }) => {
			setNotes(data);
		});
	}, []);

	function onSearch(keyword) {
		setSearchParams({ title: keyword });
		setKeyword(keyword);
	}

	const filteredNotes = searchNotes(notes, keyword);

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

	return (
		<section className="homepage"> 
            <h2 className="text-2xl font-bold">{locale === "id" ? "Catatan Aktif" : "Active Notes"}</h2>
            <SearchNote onSearch={onSearch} />
            <ListNote notes={filteredNotes} />
            <HomePageAction />
		</section>
	);
}

export default PageHome;