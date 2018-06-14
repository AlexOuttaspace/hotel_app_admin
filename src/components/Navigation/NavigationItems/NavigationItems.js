import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = () => {
	return (
		<nav>
			<ul className={classes.NavigationItems}>
				<NavigationItem link="/dashboard">Календарь</NavigationItem>
				<NavigationItem link="/bookings">Бронь</NavigationItem>
				<NavigationItem link="/suites">Номера</NavigationItem>
			</ul>
		</nav>
	);
};

export default NavigationItems;
