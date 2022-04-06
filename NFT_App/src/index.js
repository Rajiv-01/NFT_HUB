import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUpload from './views/CreateUpload';
import LandingPage from './views/LandingPage';

import Profile from './views/Profile';
import './assets/css/blk-design-system-react.css';
import './assets/css/nucleo-icons.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='' element={<LandingPage />} />
				<Route path='create_upload' element={<CreateUpload />} />

				<Route path='profile' element={<Profile />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
