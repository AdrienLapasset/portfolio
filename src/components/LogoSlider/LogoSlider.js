import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderPos: 0,
			itemWidth: 250,
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
	}

	componentDidMount() {
		this.slide();
	}

	slide() {
		let i = 0;
		window.setInterval(() => {
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
			i++;
		}, 7000);
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
					style={{ backgroundImage: logoSrc !== undefined ? `url(${logoSrc})` : 'none' }}
				/>
			);
		});

		return (
			<div className="LogoSlider">
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
