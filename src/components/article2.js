import React from 'react';
import '../css/app.scss';

class Article2 extends React.Component {
	render() {
		return (
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
		)
	}
}

export default Article2;