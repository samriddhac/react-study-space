import React from 'react';
import Navigation from '../navigation/Navigation.js';

class Header extends React.Component {
	render() {
		return (
			<div className="header row">
				<Navigation/>
			</div>
		);
	}
}
export default Header;