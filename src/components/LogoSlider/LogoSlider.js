import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogoShowed: false,
			sliderPos: 0,
			itemWidth: 230,
			logosList: [
				'medoucine.svg',
				'solen.svg',
				'switfi.svg',
				'eutelmed.svg',
				'bazimo.png',
				'ontracks.png',
				'apptamin.png'
			]
		};

		this.showLogos = this.showLogos.bind(this);
	}

	componentDidMount() {
		this.slide();
	}

	slide() {
		let i = 0;
		window.setTimeout(() => {
			this.slideItem(i);
			i++;
		}, 2000);
		window.setInterval(() => {
			this.slideItem(i);
			i++;
		}, 7000);
	}

	slideItem(i) {
		this.setState((prevState) => {
			return {
				sliderPos: (prevState.sliderPos -= this.state.itemWidth)
			};
		});
		const currentList = this.state.logosList;
		const outItem = currentList[i];
		currentList.push(outItem);
		this.setState({ logosList: currentList });
		currentList[i] = '';
	}

	showLogos() {
		this.setState((state) => ({
			isLogoShowed: !state.isLogoShowed
		}));
	}

	render() {
		const logos = require.context('../../assets/logos', true);
		const pressList = this.state.logosList.map((item, index) => {
			let logoSrc;
			if (item !== '') {
				logoSrc = logos(`./${item}`);
			}
			return (
				<div
					className="LogoSlider__item"
					key={index}
					style={{
						backgroundImage: logoSrc !== undefined ? `url(${logoSrc})` : 'none',
						width: this.state.itemWidth
					}}
				/>
			);
		});

		return (
			<div onClick={this.showLogos} className={`LogoSlider ${this.state.isLogoShowed ? 'LogoSlider--show' : ''}`}>
				<h2 className="LogoSlider__title">Ils m'ont fait confiance</h2>
				<div className="LogoSlider__slider">
					<div className="LogoSlider__container" style={{ width: this.state.itemWidth * 6 }}>
						<div
							className="LogoSlider__list"
							style={{ transform: `translateX(${this.state.sliderPos}px)` }}
						>
							{pressList}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LogoSlider;
