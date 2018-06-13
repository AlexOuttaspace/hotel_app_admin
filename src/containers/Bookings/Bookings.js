import React, { Component } from 'react';

import { bookings } from '../../testdata'; // testing
import BookingList from '../../components/BookingList/BookingList';
import CatalogButton from '../../components/BookingList/CatalogButton/CatalogButton';

import classes from './Bookings.css';

class Bookings extends Component {
	state = {
		bookings,
		query: ''
	};

	render() {
		return (
			<section className={classes.Bookings}>
				<nav className={classes.CatalogButtons}>
					<CatalogButton exact to="/bookings/">Новое</CatalogButton>
					<CatalogButton to="/bookings/confirmed">Подтверждено</CatalogButton>
					<CatalogButton to="/bookings/payed">Оплачено</CatalogButton>
				</nav>
				<BookingList bookings={bookings} />;
			</section >
		);
	}
}

export default Bookings;
