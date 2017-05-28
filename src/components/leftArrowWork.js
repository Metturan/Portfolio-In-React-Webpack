import React from 'react';
import Main from './main';
import { withRouter } from 'react-router-dom';


class LeftArrowWork extends React.Component {
	constructor(props) {
		super(props);
		this.leaveAnimation = this.leaveAnimation.bind(this);
	}
	componentDidMount() {
		window.leftArrowWrk = document.querySelector('.leftArrow-work');

		TweenMax.to(leftArrowWrk, 0.5, {left: '+=127'});
	}
	leaveAnimation(e) {
		e.preventDefault();

		TweenMax.to(leftArrow, 0.5,  {left: '-=105', ease:Power2.easeOut, autoAlpha:0}, "startArrow");

		const main = this;

		setTimeout(function() {
			main.props.history.push('/')
		}, 1300 );

		// console.log(this.props.location.pathname);
	}
	leftArrowHover() {
		TweenMax.to(leftArrowWrk, 0.2, {width:'125px', color:'white'});
	}
	leftArrowNoHover() {
		TweenMax.to(leftArrowWrk, 0.2, {width:'0px', color:'black'});
	}
	render() {
		return (
				<div className="leftArrow-work" onClick={this.leaveAnimation} onMouseOver={this.leftArrowHover} onMouseOut={this.leftArrowNoHover}>
					<div className="leftArrow-desc">Main</div>
					<div className="left-nav">&#60;</div>
					<div className="right-nav">></div>
				</div>
		)
	}
}

export default withRouter(LeftArrowWork);