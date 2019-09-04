import React, { Component } from 'react';
import './Home.scss';
import Illustration from '../Illustration/Illustration';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
			isSwipe: false,
			isMobile: false
		};
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	startX = null;
	startY = null;
	moveX = null;
	moveYstartX = null;
	screenWidth = null;

	onTouchStart(event) {
		this.startX = event.touches[0].clientX;
		this.startY = event.touches[0].clientY;
	}

	onTouchMove(event) {
		this.moveX = event.touches[0].clientX;
		this.moveY = event.touches[0].clientY;
		let diffX = Math.abs(this.startX - this.moveX);
		let diffY = Math.abs(this.startY - this.moveY);
		let diffMax = Math.max(diffX, diffY);
		let opacity = 1 - diffMax / 200;
		this.setState({ opacity: opacity });
		if (opacity <= 0) {
			this.setState({ isSwipe: true });
		}
	}

	onTouchEnd() {
		this.setState({ opacity: 1 });
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		if (window.innerWidth < 992) {
			this.setState({ isMobile: true });
		}
	}

	render() {
		return (
			<div
				className="Home"
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
			>
				{!this.state.showText ? <Illustration opacity={this.state.opacity} /> : ''}
				{!this.state.isMobile || this.state.showText ? (
					<div className="Home__text">
						<p className="Home__text__hello">Bonjour,</p>
						<p>
							Je suis un développeur créatif (et occasionnellement designer) qui aime les sites
							responsive, le design minimaliste et les transitions en douceurs.
						</p>
						<p className="Home__text__contact">
							Pour me contacter c’est par ici :<br />
							<a href="mailto:mail@adrienlapasset.fr" target="_blank" rel="noopener noreferrer">
								mail@adrienlapasset.fr
							</a>
						</p>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}

export default Home;
