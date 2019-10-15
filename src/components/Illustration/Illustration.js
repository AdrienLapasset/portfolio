import React, { Component } from 'react';
import Hair from './parts/Hair/Hair';
import Body from './parts/Body/Body';
import Background from './parts/Background/Background';
import './Illustration.scss';

class Illustration extends Component {
	constructor(props) {
		super(props);
		this.state = { x: 0, y: 0 };
	}

	_onMouseMove(e) {
		this.setState({ x: e.screenX, y: e.screenY });
		// console.log(e.screenX, e.screenY);
	}
	render() {
		return (
			<div
				onMouseMove={this._onMouseMove.bind(this)}
				className="illustration"
				style={{ opacity: this.props.opacity }}
			>
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
