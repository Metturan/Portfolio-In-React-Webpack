import React from 'react';
import ReactDOM from 'react-dom';
import '../css/app.scss';
import '../css/main.scss';
import Main from './main';
import About from './about';
import Work from './work';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom';

const Root = () => {
	return(
		<Router history={hashHistory}>
			<div>
				<Route exact path="/" component={Main} />
				<Route path="/about" component={About} />
				<Route path="/work" component={Work} />
			</div>
		</Router>
	)
}

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);

