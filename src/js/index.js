import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import App from './components/container/app.jsx';


//ReactDOM.render(<App />, document.getElementById('app')); 
ReactDOM.render(
	(
		<Router history={browserHistory}>
			<Route path="/" component= {App}>
				<IndexRoute component={Home}/>
				<Route path="about" component={about}/>
			</Route>
		</Router>
	), document.getElementById('app'));