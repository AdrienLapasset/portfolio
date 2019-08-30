import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songName: ''
		};
	}

	render() {
		return (
			<div className="LogoSlider">
				<h2 className="LogoSlider__title">Ils m'ont fait confiance</h2>
				<div className="LogoSlider__container" />
			</div>
		);
	}
}

export default LogoSlider;
