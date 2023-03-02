import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [notes, setNotes] = React.useState(
		JSON.parse(localStorage.getItem('notes')) || [],
	);
	return (
		<Context.Provider value={{ notes, setNotes }}>{children}</Context.Provider>
	);
}
export { Context, Provider };
