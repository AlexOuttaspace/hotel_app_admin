import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = () => {
	return (
		<nav>
			<ul className={classes.NavigationItems}>
				<NavigationItem link="/dashboard">Dashboard</NavigationItem>
				<NavigationItem link="/link2">Link 2</NavigationItem>
				<NavigationItem link="/link3">Link 3</NavigationItem>
			</ul>
		</nav>
	);
};

export default NavigationItems;
