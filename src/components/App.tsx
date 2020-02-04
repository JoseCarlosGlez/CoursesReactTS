/**
 * React's imports
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Components' imports
 */
import Header from './shared/navbar';
import HomePage from './Home';
import CoursePage from './CoursePage';

export default function App() {
	return (
		<>
			<Header />
			<div className="container-fluid">
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/courses" component={CoursePage} />
				</Switch>
			</div>
		</>
	);
}
