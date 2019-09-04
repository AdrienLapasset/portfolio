import React, { Component } from 'react';
import Hair from './parts/Hair/Hair';
import Body from './parts/Body/Body';
import Background from './parts/Background/Background';
import './Illustration.scss';

class Illustration extends Component {
	render() {
		return (
			<div className="illustration" style={{ opacity: this.props.opacity }}>
				<div className="character__container">
					<div className="character">
						<Hair />
						<Body />
					</div>
					<div className="shadow" />
				</div>
				<Background />
			</div>
		);
	}
}

export default Illustration;
