import React from 'react';
import {scrollIframe} from '../utils/helpers.js';
import LeftArrowWork from './leftArrowWork';
import Article1 from './article1';
import Article2 from './article2';
import Article3 from './article3';
// import RightArrow from './rightArrow';
import '../css/app.scss';
	
	const leftArrow = document.getElementsByClassName('leftArrow-work');
	let workSection = document.getElementsByClassName('work');

class Work extends React.Component {
	componentDidMount() {
		scrollIframe();
		TweenMax.to(workSection, 0.5, {autoAlpha:1});
	}
	render() {
		return (
			<div>
				<div className="overlay-arrows">
					<LeftArrowWork />
				</div>
				<section className="work">
					<h1 className="work-title">mk</h1>
					<div className="work-intro-container">
						<p className="work-intro">Portfolio</p>
					</div>
					<Article1 />
					<Article2 />
					<Article3 />
					<article id="contact">
						<div className="contact-info">
							<h1>Contact Me</h1>
							<p>Looking for help with your website?</p>
							<p>Shoot me a message, I always reply within 24 hours.</p>
							<div className="contact-info2">
								<p>Metturan K.</p>
								<p>Living in Toronto, Ontario, Canada</p>
							</div>
						</div>
					</article>
				</section>
			</div>
		)
	}
}

export default Work;