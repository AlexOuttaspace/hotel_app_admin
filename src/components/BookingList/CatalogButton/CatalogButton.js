import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './CatalogButton.css';

const catalogButton = (props) => {

	return (
		<NavLink
			exact={props.exact}
			to={props.to}
			className={classes.CatalogButton}
			activeClassName={classes.active}
			onClick={props.clicked}>
			{props.children}
		</NavLink>
	);
};

export default catalogButton;
