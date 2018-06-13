import React from 'react';
import classes from './CatalogButton.css';
const catalogButton = (props) => {
	const btnClasses = [
		classes.CatalogButton,
		props.active ? classes.active : null
	];
	return (
		<button className={btnClasses.join(' ')} onClick={props.clicked}>
			{props.children}
		</button>
	);
};

export default catalogButton;
