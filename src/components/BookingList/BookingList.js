import React from 'react';

import BookingListItem from './BookingListItem/BookingListItem';

import classes from './BookingList.css';
const bookingList = (props) => {
	const list = props.bookings.map((b) => (
		<BookingListItem key={b._id} {...b} />
	));

	return <ul className={classes.BookingList}>{list}</ul>;
};

export default bookingList;
