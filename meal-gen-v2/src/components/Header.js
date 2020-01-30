import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	render() {
		return (
			<nav className="Header">
				<a className="Header-logo">MealGen</a>
			</nav>
		);
	}
}

export default Header;
