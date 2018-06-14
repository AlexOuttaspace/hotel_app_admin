import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import Bookings from './containers/Bookings/Bookings';
import Suites from './containers/Suites/Suites';
import Layout from './components/Layout/Layout';

class App extends Component {
	render() {
		return (
			<Layout>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/bookings" component={Bookings} />
				<Route path="/suites" component={Suites} />
			</Layout>
		);
	}
}

export default App;
