// import functions
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import contexts
import { Provider } from './context/Notes';
import { Provider as ThemeProvider } from './context/Theme';
// import components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<Provider>
					<App />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
