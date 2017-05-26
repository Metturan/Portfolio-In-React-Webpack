import React from 'react';
import {scrollIframe} from '../utils/helpers.js';
// import LeftArrow from './leftArrow';
// import RightArrow from './rightArrow';
import '../css/app.scss';

	let workSection = document.getElementsByClassName('work');


class Work extends React.Component {
	componentDidMount() {
		scrollIframe();
		TweenMax.to(workSection, 0.4, {autoAlpha:1, ease:Power0.easeNone});
	}
	render() {
		return (
			<section className="work">
				<h1 className="work-title">mk</h1>
				<div className="work-intro-container">
					<p className="work-intro">Portfolio</p>
				</div>
				<article className="overture">
					<div className="overture-container">
						<div className="skill-set">
							<ul className="skills">
								<li className="skill">UX</li>
								<li className="skill">Visual Design</li>
								<li className="skill">E-commerce</li>
								<li className="skill">Graphic Design</li>
							</ul>
						</div>
						<div className="heading-mobile">Overture Apparel</div>
						<div className="screenshot">
							<iframe id="overture" src="http://player.vimeo.com/video/197041664?background=1&autoplay=0" width="290" height="520" frameBorder="0"></iframe>
						</div>
						<div className="info">
							<h2>Overture Apparel</h2>
							<p>An e-commerce fashion site. Clothes are designed by an artist and an actor. With the introduction of a new line we wanted to completely rebrand the site. The whole site has been overhauled and redone, the UI is made to be touchable and draggable.</p>
						</div>
					</div>
		
				</article>
				<article className="cleanmart">
					<div className="cleanmart-container">
						<div className="skill-set">
							<ul className="skills">
								<li className="skill">UX</li>
								<li className="skill">Visual Design</li>
								<li className="skill">E-commerce</li>
							</ul>
						</div>
						<div className="screenshot"><iframe id="cleanmart" src="https://player.vimeo.com/video/203152134?background=1&autoplay=0" width="290" height="520" frameBorder="0"></iframe>
			</div>
						<div className="info">
							<h2>Cleanmart</h2>
							<p>A commerce site that ships supplies to businesses and restaurants. We redid the site and introduced branding and more accessible UX design. Strategy was to reduce barriers to purchase and time spent communicating to prospects, as well as overall visual design.</p>	
						</div>
					</div>
				</article>
				<article className="sugarcube" id="last">
					<div className="sugarcube-container">
						<div className="screenshot">
							<iframe id="sugarcube" src="https://player.vimeo.com/video/197036201?background=1&autoplay=0" width="640" height="616" frameBorder="0"></iframe>
						</div>
						<div className="info">
							<h2>Sugar Cube Trailer</h2>
							<p>Sugar Cube the movie is a creative short movie experience about writer's block. The site was designed for a director in Toronto for the debut of his short film, we included a different visual design for both mobile and desktop. The movie's been shown around different film festivals all over North America.</p>
							<ul className="skills">
								<li className="skill">UX</li>
								<li className="skill">Visual Design</li>
								<li className="skill">Graphic Design</li>
							</ul>
						</div>
					</div>
				</article>
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
		)
	}
}

export default Work;