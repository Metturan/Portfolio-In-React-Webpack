import React from 'react';
import RightArrow from './rightArrow';
import Main from './main';
import { withRouter } from 'react-router-dom';

	let leftArrow = document.getElementsByClassName('leftArrow');
	let rightArrow = document.getElementsByClassName('rightArrow');
	let delay = 0.05;

class LeftArrow extends React.Component {
	constructor(props) {
		super(props);
		this.leaveAnimation = this.leaveAnimation.bind(this);
	}
	componentDidMount() {
		window.textEl = document.querySelectorAll('h1.title-name, h1.title-desc');
		window.splitText = new SplitText(textEl);
		window.time = splitText.chars.length * delay;
	}
	leaveAnimation(e) {
		e.preventDefault();

		function random(min, max){
			return (Math.random() * (max - min)) + min;
		}

		TweenMax.to(rightArrow, 0.5,  {right: '-=117', ease:Power2.easeOut, autoAlpha:0}, "startArrow")
		TweenMax.to(leftArrow, 0.5,  {left: '-=105', ease:Power2.easeOut, autoAlpha:0}, "startArrow")

		for(let i=0; i < splitText.chars.length; i++) {
			TweenMax.to(splitText.chars[i], time, {
				opacity: 0,
				x: random(-300, 300),
				y: random(-300, 300),
				z: random(500, 1000),
				scale: 10,
				ease: Power3.easeIn
			})
		}
		let work = this;

		setTimeout(function() {
			work.props.history.push('/work')
		}, 1500 );

		console.log(this.props.location.pathname);
	}
	leftArrowHover() {
		TweenMax.to(leftArrow, 0.2, {width:'125px', color:'white'});
	}
	leftArrowNoHover() {
		TweenMax.to(leftArrow, 0.2, {width:'0px', color:'black'});
	}
	render() {
		return (
				<div className="leftArrow" onClick={this.leaveAnimation} onMouseOver={this.leftArrowHover} onMouseOut={this.leftArrowNoHover}>
					<div className="leftArrow-desc">Work</div>
					<div className="left-nav">&#60;</div>
					<div className="right-nav">></div>
				</div>
		)
	}
}

export default withRouter(LeftArrow);