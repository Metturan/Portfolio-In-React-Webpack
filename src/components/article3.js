import React from 'react';
import '../css/app.scss';

class Article3 extends React.Component {
	render() {
		return (
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
		)
	}
}

export default Article3;