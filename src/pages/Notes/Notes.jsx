// import css
import './Notes.css';
// import functions
import React from 'react';
import { Link } from 'react-router-dom';
// import icons
import { CiSearch } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';
import { RiMoonCloudyLine } from 'react-icons/ri';
import { BiSun } from 'react-icons/bi';
// import hooks
import useNotes from '../../components/hooks/useNotes';
import useTheme from '../../components/hooks/useTheme';
// import components
import NoteItem from '../../components/NoteItem/NoteItem';

function Notes() {
	const [notes] = useNotes();
	const [showSearch, setShowSearch] = React.useState(false);
	const [text, setText] = React.useState('');
	const [filteredNotes, setFilteredNotes] = React.useState(notes);
	const [theme, setTheme] = useTheme();

	const handleSearch = () => {
		function filteredValidation(note) {
			if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
				return note;
			}
		}
		setFilteredNotes(notes.filter((note) => filteredValidation(note)));
	};

	React.useEffect(handleSearch, [notes, text]);

	return (
		<section>
			<header className={`notes__header ${theme === true ? 'notes__header-dark' : ''}`}>
				<button
					className='btn'
					onClick={() => setTheme((prevState) => !prevState)}>
					{theme ? <BiSun /> : <RiMoonCloudyLine />}
				</button>
				{!showSearch && <h2>My Notes</h2>}
				{showSearch && (
					<input
						type='text'
						defaultValue={text}
						onChange={(e) => {
							setText(e.target.value);
							handleSearch();
						}}
						autoFocus
						placeholder='Keyword...'
					/>
				)}
				<button
					className='btn'
					onClick={() => setShowSearch((prevState) => !prevState)}>
					{showSearch ? <MdClose /> : <CiSearch />}
				</button>
			</header>
			<div className='notes__container'>
				{filteredNotes.length === 0 && (
					<p className='empty__notes'>Note notes found.</p>
				)}
				{filteredNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<Link to='/create-note' className='btn add__btn'>
				<BsPlusLg />
			</Link>
		</section>
	);
}
export default Notes;
