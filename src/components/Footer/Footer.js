import React, { Component } from 'react';
import LogoSlider from '../LogoSlider/LogoSlider';
import './Footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowed: false
		};

		this.toggleFooter = this.toggleFooter.bind(this);
	}

	toggleFooter() {
		this.setState((state) => ({
			isShowed: !state.isShowed
		}));
	}

	render() {
		return (
			<div onClick={this.toggleFooter} className={`Footer ${this.state.isShowed ? 'Footer--show' : ''}`}>
				<h2 className="Footer__title">Ils m'ont fait confiance</h2>
				<LogoSlider isShowed={this.state.isShowed} />
			</div>
		);
	}
}

export default Footer;
