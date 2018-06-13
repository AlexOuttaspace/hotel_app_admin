import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = () => {
	return (
		<nav>
			<ul className={classes.NavigationItems}>
				<NavigationItem link="/dashboard">Календарь</NavigationItem>
				<NavigationItem link="/bookings">Бронь</NavigationItem>
				<NavigationItem link="/link3">Номера</NavigationItem>
			</ul>
		</nav>
	);
};

export default NavigationItems;
