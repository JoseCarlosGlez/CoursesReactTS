/**
 * React's imports
 */

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/**
 * Component's imports
 */
import App from './components/App';

/**
 * Styles' imports
 */

import './styles/style.scss';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ROOT = document.getElementById('container');

render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	ROOT
);
