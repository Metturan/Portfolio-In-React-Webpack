import React from 'react';
import {Link} from 'react-router-dom';


	let rightArrow = document.getElementsByClassName('rightArrow');

class RightArrow extends React.Component {
	rightArrowHover() {
		TweenMax.to(rightArrow, 0.2, {width:'125px', color:'white'});
	}
	rightArrowNoHover() {
		TweenMax.to(rightArrow, 0.2, {width:'0px', color:'black'});
	}
	render() {
		return (
			<Link to='/about'>
				<div className="rightArrow" onMouseOut={this.rightArrowNoHover} onMouseOver={this.rightArrowHover}>
					<div className="rightArrow-desc">About</div>
					<div className="left-nav-right">&#60;</div>
					<div className="right-nav-right">></div>
				</div>
			</Link>
		)
	}
}

export default RightArrow;
