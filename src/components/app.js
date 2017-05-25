import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';
import '../css/main.scss';
import Main from './main';
import About from './about';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

const Root = () => {
	return(
		<Router history={hashHistory}>
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	)
}

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);

