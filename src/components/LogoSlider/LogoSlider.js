import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderPos: 0,
			logosList: [ 'medoucine', 'solen', 'switfi', 'medoucine', 'solen', 'switfi' ]
		};
	}

	componentDidMount() {
		this.slide();
	}

	slide() {
		const sliderGap = 250;
		let i = 0;
		window.setInterval(() => {
			this.setState((prevState) => {
				return {
					sliderPos: (prevState.sliderPos -= sliderGap)
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
				logoSrc = logos(`./${item}.svg`);
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
				<div className="LogoSlider__container">
					<div className="LogoSlider__list" style={{ transform: `translateX(${this.state.sliderPos}px)` }}>
						{pressList}
					</div>
				</div>
			</div>
		);
	}
}

export default LogoSlider;
