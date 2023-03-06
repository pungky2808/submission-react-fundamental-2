import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { MdGTranslate, MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { getAccessToken } from "../utils/api";
import PropTypes from 'prop-types';

function NavigationNote({logout, name}) {
    const { locale, toggleLocale } = useContext(LocaleContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

	const accessToken = getAccessToken();
	return (
		<>
			<h1>
				<Link to="/" className="text-3xl font-bold cursor-pointer hover:underline">
					{locale === "id" ? "Aplikasi Catatan" : "Notes App"}
				</Link>
			</h1>
			{accessToken ? (
				<nav className="navigation">
					<ul>
						<li>
							<Link to="/archive" className="text-2xl cursor-pointer hover:underline">
							{locale === "id" ? "Arsip" : "Archive"}
							</Link>
						</li>
					</ul>
				</nav>
			) : null}
			<button className="toggle-locale" type="button" onClick={toggleLocale}>
				<MdGTranslate />
			</button>
			<button className="toggle-theme" type="button" onClick={toggleTheme}>
				{theme === "dark" ? <MdOutlineWbSunny /> : <RiMoonLine />}
			</button>
			{accessToken ? (
				<button className="button-logout" type="button" onClick={logout}>
					<FiLogOut />
					{name}
				</button>
			) : null}
		</>
	);
}

NavigationNote.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string,
};

export default NavigationNote;