import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import { Link } from 'react-router-dom';

import classes from './Toolbar.css';

const toolbar = () => {
	return (
		<header className={classes.Toolbar}>
			<h1>
				<Link to="/dashboard">Dashboard</Link>
			</h1>
			<NavigationItems />
		</header>
	);
};

export default toolbar;
