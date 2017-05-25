import React from 'react';
import RightArrow from './rightArrow';
import LeftArrow from './leftArrow';
import '../css/app.scss';
import { Link } from 'react-router-dom';

		const opening = new TimelineMax();
		const mainArrow = new TimelineMax();
		let overlay = document.getElementsByClassName('overlay'),
			overlayStart = document.getElementsByClassName('overlay-st'),
			title = document.getElementsByClassName('title-wrapper'),
			width = window.innerWidth,
			rightArrow = document.getElementsByClassName('rightArrow'),
			leftArrow = document.getElementsByClassName('leftArrow'),
			rightSymbol = document.querySelectorAll('.rightArrow, .rightArrow-desc'),
			leftSymbol = document.getElementsByClassName('leftArrow leftArrow-desc');



class Main extends React.Component {
	animate() {
		mainArrow
			.to(rightArrow, 0.5,  {autoAlpha: 1, right: '+=117'}, "startArrow")
			.to(leftArrow, 0.5,  {autoAlpha:1, left: '+=105'}, "startArrow")

		opening
			.to(overlayStart, 0.7, {left: width, ease:Power4.easeOut, delay:1})
			.to(title, 0.7, {color: 'black', scale: 1.2, ease:Power2.easeNone}, '-=0.7')
			.add(mainArrow)
	}
	titleOut() {
		mainArrow.reverse();
	}
	componentDidMount() {
		this.animate();
	}
	componentWillLeave() {
		this.animateOut();
	}
	render() {
		return (
			<div>
				<div className="introContainer">
					<div className="overlay-st"></div>
					<div className="overlay-arrows">
						<LeftArrow />
						<RightArrow />
					</div>
					<div id='container'>
						<div className="title-wrapper">
							<h1 className="title-name">mk</h1>
							<h1 className="title-desc">Designer && Developer</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main;