import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';
import { Link } from 'react-router-dom'
;
class NavBar extends Component {
	render() {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Korts-App</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav pullRight>
					<NavItem>
						Login
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;