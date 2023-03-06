import React from "react";
import DetailPageAction from "../components/DetailPageAction";
import DetailPageBody from "../components/DetailPageBody";
import Page404 from "./Page404";
import Loading from "../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import PropTypes from 'prop-types';

function PageDetailWrapper() {
	const { id } = useParams();
	const navigate = useNavigate();

	return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: null,
			initializing: true,
		};

		this.isNoteArchivedHandler = this.isNoteArchivedHandler.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
	}

	async componentDidMount() {
		const { data } = await getNote(this.props.id);
		this.setState(() => {
			return {
				note: data,
				initializing: false,
			};
		});
	}

	async isNoteArchivedHandler(id) {
		if (this.state.note.archived) {
			await unarchiveNote(id);
			this.props.navigate("/");
		} else if (!this.state.note.archived) {
			await archiveNote(id);
			this.props.navigate("/");
		}
	}

	async onDeleteHandler(id) {
		await deleteNote(id);
		this.props.navigate("/");
	}

	render() {
		if (this.state.initializing) {
			return <Loading/>;
		}

		if (this.state.note) {
			return (
				<section className="detail-page">
					<DetailPageBody note={this.state.note} />
					<DetailPageAction
						id={this.props.id}
						archived={this.state.note.archived}
						isArchived={this.isNoteArchivedHandler}
						onDelete={this.onDeleteHandler}
					/>
				</section>
			);
		}
		return <Page404 />;
	}
}

DetailPage.propTypes = {
	id: PropTypes.string,
	navigate: PropTypes.func.isRequired,
};

export default PageDetailWrapper;