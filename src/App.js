import React from 'react';
import history from './History/history';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Components/Router/routes';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './Context/auth';

import ApolloProvider from './ApolloProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';

import './Styles/FormFields.css';
import './Scss/App.scss';
import './App.css';
import './Styles/loader.css';

function App() {
	return (
		<ApolloProvider>
			<AuthProvider>
				<div className="App">
					<ToastContainer
						position="top-right"
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnVisibilityChange
						draggable
						pauseOnHover
					/>
					<ToastContainer />
					<Router history={history}>
						<div className="App wrapper">
							<Routes />
						</div>
					</Router>
				</div>
			</AuthProvider>
		</ApolloProvider>
	);
}

export default App;
