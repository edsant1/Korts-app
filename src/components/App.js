import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hello World!</h1>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
