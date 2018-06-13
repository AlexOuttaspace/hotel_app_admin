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
			<section>
				<img src={props.suite.mainImage} alt="Suite" />
				<ul>
					<h4>Номер {props.suite.number}</h4>
					<li>Мест: {props.suite.lodgers}</li>
					<li>Дополнительных мест: {props.suite.additionalLodgers || 0}</li>
					<li>Тип номера: {props.suite.roomType}</li>
					<li>Цена в сутки: {props.suite.cost} р.</li>
				</ul>

			</section>
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
