import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderPos: 0,
			itemWidth: 230,
			slideCount: 0,
			isReset: false,
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

	intervalId = null;
	transitionDuration = 7; //secondes

	componentDidUpdate(prevProps) {
		if (prevProps.isShowed !== this.props.isShowed) {
			if (this.props.isShowed) {
				this.slide();
			}
			if (!this.props.isShowed) {
				this.resetSlide();
			}
		}
	}

	slide() {
		this.setState({ isReset: false });
		this.slideItem();
		this.intervalId = window.setInterval(() => {
			this.slideItem();
		}, this.transitionDuration * 1000);
	}

	slideItem() {
		this.setState((prevState) => {
			return {
				sliderPos: (prevState.sliderPos -= this.state.itemWidth)
			};
		});
		const currentList = this.state.logosList;
		const outItem = currentList[this.state.slideCount];
		currentList.push(outItem);
		currentList[this.state.slideCount - 1] = '';
		this.setState({ logosList: currentList });
		this.setState((prevState) => {
			return {
				slideCount: prevState.slideCount + 1
			};
		});
	}

	resetSlide() {
		window.setTimeout(() => {
			clearInterval(this.intervalId);
			const currentList = this.state.logosList;
			const newList = currentList.slice(this.state.slideCount);
			this.setState({ logosList: newList, slideCount: 0, sliderPos: 0, isReset: true });
		}, 400);
	}

	render() {
		const logos = require.context('../../../assets/logos', true);
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
			<div className={`LogoSlider ${this.props.isShowed ? 'LogoSlider--show' : ''}`}>
				<div className="LogoSlider__container" style={{ width: this.state.itemWidth * 6 }}>
					<div
						className="LogoSlider__list"
						style={{
							transform: `translateX(${this.state.sliderPos}px)`,
							transition: this.state.isReset
								? 'none'
								: 'transform ' + this.transitionDuration + 's linear'
						}}
					>
						{pressList}
					</div>
				</div>
			</div>
		);
	}
}

export default LogoSlider;
