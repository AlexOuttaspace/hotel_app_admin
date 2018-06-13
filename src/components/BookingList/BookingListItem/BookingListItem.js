import React from 'react';

import classes from './BookingListItem.css';

const bookingListItem = (props) => {
	const childrenList = props.children.map((c, i, arr) => {
		let listItem = c + ' years';
		if (i !== arr.length - 1) {
			listItem += ', ';
		}
		return <span key={c + i}>{listItem}</span>;
	});

	return (
		<li className={classes.BookingListItem}>
			<ul>
				<li>Name: {props.name}</li>
				{props.email && <li>email: {props.email}</li>}
				{props.phone && <li>phone: {props.phone}</li>}
				<li>Adults: {props.adults}</li>

				{!!props.children.length && (
					<li>
						Children: {props.children.length} ({childrenList})
					</li>
				)}
				<li>From: {props.from}</li>
				<li>To: {props.to}</li>
				<li>Price: {props.price} р.</li>
			</ul>
		</li>
	);
};

export default bookingListItem;
