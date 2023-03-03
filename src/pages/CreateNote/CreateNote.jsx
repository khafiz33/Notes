// import css
import './CreateNote.css';
// import functions
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import id
import { v4 as uuid } from 'uuid';
// import icons
import { IoIosArrowBack } from 'react-icons/io';
// import hooks
import useCreateDate from '../../components/hooks/useCreateDate';
import useNotes from '../../components/hooks/useNotes';

function CreateNote() {
	const [setNotes] = useNotes(true);
	const [title, setTitle] = React.useState('');
	const [details, setDetails] = React.useState('');
	const date = useCreateDate();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title && details) {
			const note = { id: uuid(), title, details, date };

			// add this note to the Notes array
			setNotes((prevNotes) => [note, ...prevNotes]);

			// redirect to home page
			navigate('/');
		}else {
			alert('Enter the complete information...')
		}
	};

	return (
		<section>
			<header className='create-note__header'>
				<Link to='/' className='btn'>
					<IoIosArrowBack />
				</Link>
				<button className='btn lg primary' onClick={handleSubmit}>
					Save
				</button>
			</header>

			<form className='create-note__form' onSubmit={handleSubmit}>
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
export default CreateNote;
