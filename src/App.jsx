// import css
import './App.css';
// import functions
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import hooks
import useNotes from './components/hooks/useNotes';
import useTheme from './components/hooks/useTheme';
// import components
import CreateNote from './pages/CreateNote/CreateNote';
import EditNote from './pages/EditNote/EditNote';
import Notes from './pages/Notes/Notes';

function App() {
	const [notes] = useNotes();
	const [theme] = useTheme();

	React.useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes));
	}, [notes]);
	return (
		<>
			<main className={`app ${theme === true ? 'app-dark' : ''}`}>
				<Routes>
					<Route path='/' element={<Notes />} />
					<Route path='/create-note' element={<CreateNote />} />
					<Route path='/edit-note/:id' element={<EditNote />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
