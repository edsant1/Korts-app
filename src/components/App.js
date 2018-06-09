import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import NavBar from './NavBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
