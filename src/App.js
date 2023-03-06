import React, {useState, useEffect, useMemo} from 'react';
import NavigationNote from './components/NavigationNote';
import PageHome from './pages/PageHome';
import PageArchive from './pages/PageArchive';
import PageAdd from './pages/PageAdd';
import Page404 from './pages/Page404';
import PageDetail from './pages/PageDetail';
import PageLogin from './pages/PageLogin';
import PageRegister from './pages/PageRegister';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, putAccessToken } from "./utils/api";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	const [authedUser, setAuthedUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const toggleLocale = () => {
		setLocale((prevLocale) => {
			const newLocale = prevLocale === "id" ? "en" : "id";
			localStorage.setItem("locale", newLocale);
			return newLocale;
		});
	};

	const toggleTheme = () => {
		setTheme((prevState) => {
			const newTheme = prevState === "dark" ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			return newTheme;
		});
	};

	const localeContextValue = useMemo(() => {
		return {
			locale,
			toggleLocale,
		};
	}, [locale]);

	const themeContextValue = useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	useEffect(() => {
		async function getData() {
			return await getUserLogged().then(({ data }) => {
				setAuthedUser(data);
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			});
		}

		getData();
	}, []);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	async function onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();
		setAuthedUser(data);
	}

	function onLogout() {
		putAccessToken("");
		setAuthedUser(null);
	}

	if (loading) {
		return (
			<Loading/>
		);
	}

	if (authedUser === null) {
		return (
			<LocaleProvider value={localeContextValue}>
				<ThemeProvider value={themeContextValue}>
					<div className="app-container">
						<header>
							<NavigationNote logout={onLogout} />
						</header>
						<main>
							<Routes>
								<Route
									path="/*"
									element={<PageLogin loginSuccess={onLoginSuccess} />}
								/>
								<Route path="/register" element={<PageRegister />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</LocaleProvider>
		);
	}

	return (
		<LocaleProvider value={localeContextValue}>
			<ThemeProvider value={themeContextValue}>
				<div className="app-container">
					<header>
						<NavigationNote logout={onLogout} name={authedUser.name} />
					</header>
					<main>
						<Routes>
							<Route path="/*" element={<Page404 />} />
							<Route path="/" element={<PageHome />} />
							<Route path="/archive" element={<PageArchive />} />
							<Route path="/notes/new" element={<PageAdd />} />
							<Route path="/notes/:id" element={<PageDetail />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</LocaleProvider>
	);
}

export default App;
