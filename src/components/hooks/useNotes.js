// import functions
import React from 'react';
// import context
import { Context } from '../../context/Notes';

const useNotes = (setterOnly) => {
	const { notes, setNotes } = React.useContext(Context);

	return setterOnly ? [setNotes] : [notes, setNotes];
};
export default useNotes;
