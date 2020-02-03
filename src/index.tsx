/**
 * React's imports
 */

import React from 'react';
import { render } from 'react-dom';

/**
 * Component's imports
 */
import App from './components/App';

/**
 * Styles' imports
 */

import './styles/style.scss';

const ROOT = document.getElementById('container');

render(<App />, ROOT);
