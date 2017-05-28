import React from 'react';

class Article1 extends React.Component {
	render() {
		return (
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
		)
	}
}

export default Article1