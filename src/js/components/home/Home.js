import React from 'react';
import Header from '../header/Header.js';
import HomeContent from '../home-carousal/HomeContent.js';
import SiteCredit from '../site-credit/SiteCredit.js';
//import * as style from '../../../less/style.css';

class Home extends React.Component {
	render() {
		return (
			<div className="home-container">
				<Header/>
				<HomeContent/>
				<SiteCredit/>
			</div>
		);
	}
}
export default Home;