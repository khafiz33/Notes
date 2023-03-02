// import functions
import React from 'react';
// import context
import { Context } from '../../context/Theme';

const useTheme = (setterOnly) => {
	const { theme, setTheme } = React.useContext(Context);

	return setterOnly ? [setTheme] : [theme, setTheme];
};
export default useTheme;
