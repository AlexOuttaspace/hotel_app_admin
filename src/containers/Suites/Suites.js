import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CreateSuite from './CreateSuite/CreateSuite'

class Suites extends Component {
  state = {}
  render() {
    return (
      <section>
        <Route path={this.props.match.url + '/new'} component={CreateSuite} />
      </section>
    )
  }
}

export default Suites;