import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import Layout from './components/Layout/Layout';

class App extends Component {
	render() {
		return (
			<Layout>
				<Dashboard />
			</Layout>
		);
	}
}

export default App;
