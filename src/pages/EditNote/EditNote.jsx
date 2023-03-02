// import css
import './EditNote.css';
import '../CreateNote/CreateNote.css';
// import functions
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import icons
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import hooks
import useCreateDate from '../../components/hooks/useCreateDate';
import useNotes from '../../components/hooks/useNotes';

function EditNote() {
	const [notes, setNotes] = useNotes();
	const { id } = useParams();
	const note = notes.find((item) => item.id === id);
	const [title, setTitle] = React.useState(note.title);
	const [details, setDetails] = React.useState(note.details);
	const date = useCreateDate();
	const navigate = useNavigate();

	const handleForm = (e) => {
		e.preventDefault();

		if (title && details) {
			const newNote = { ...note, title, details, date };

			const newNotes = notes.map((item) => {
				if (item.id === id) {
					item = newNote;
				}
				return item;
			});
			setNotes(newNotes);
		}

		// redirect to home page
		navigate('/');
	};

	const handleDelete = () => {
		if (window.confirm('Are you sure you want to delete ?')) {
			const newNotes = notes.filter((item) => item.id !== id);

			setNotes(newNotes);

			// redirect to home page
			navigate('/');
		}
	};

	return (
		<section>
			<header className='create-note__header'>
				<Link to='/' className='btn'>
					<IoIosArrowBack />
				</Link>
				<button className='btn lg primary' onClick={handleForm}>
					Save
				</button>
				<button className='btn danger' onClick={handleDelete}>
					<RiDeleteBin6Line />
				</button>
			</header>
			<form className='create-note__form' onSubmit={handleForm}>
				<input
					type='text'
					placeholder='Title'
					defaultValue={title}
					onChange={(e) => setTitle(e.target.value)}
					autoFocus
				/>
				<textarea
					rows={28}
					placeholder='Note details...'
					defaultValue={details}
					onChange={(e) => setDetails(e.target.value)}></textarea>
			</form>
		</section>
	);
}
export default EditNote;
