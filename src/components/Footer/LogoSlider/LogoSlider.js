import React, { Component } from 'react';
import './LogoSlider.scss';

class LogoSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sliderPos: 0,
			itemWidth: 230,
			slideCount: 0,
			companyList: [
				{ name: 'medoucine.svg', url: 'https://www.medoucine.com' },
				{ name: 'solen.svg', url: 'https://www.solen.co' },
				{ name: 'switfi.svg', url: 'https://www.switfi.fr' },
				{ name: 'eutelmed.svg', url: 'https://eutelmed.com' },
				{ name: 'bazimo.png', url: 'https://www.bazimo.fr' },
				{ name: 'ontracks.png', url: 'https://www.ontracks.co' },
				{ name: 'apptamin.png', url: 'https://www.apptamin.com' }
			]
		};

		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
	}

	intervalId = null;
	startY = null;
	moveY = null;
	currentSliderPos = null;
	logoNb = 0;

	componentDidMount() {
		this.logoNb = this.state.companyList.length;
	}

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
		this.intervalId = window.setInterval(() => {
			this.slideItem();
		}, 20);
	}

	slideItem() {
		this.setState((prevState) => {
			return {
				sliderPos: (prevState.sliderPos += 1)
			};
		});
		if (this.state.sliderPos % this.state.itemWidth === 0) {
			this.pushItem();
		}
	}

	pushItem() {
		const currentList = this.state.companyList;
		const outItem = currentList[this.state.slideCount];
		currentList.push(outItem);
		currentList[this.state.slideCount - 1] = '';
		this.setState({ companyList: currentList });
		this.setState((prevState) => {
			return {
				slideCount: prevState.slideCount + 1
			};
		});
	}

	resetSlide() {
		window.setTimeout(() => {
			clearInterval(this.intervalId);
			const currentList = this.state.companyList;
			const newList = currentList.slice(this.state.slideCount);
			this.setState({ companyList: newList, slideCount: 0, sliderPos: 0 });
		}, 400);
	}

	onTouchStart(event) {
		clearInterval(this.intervalId);
		this.startX = Math.round(event.touches[0].clientX);
		this.currentSliderPos = this.state.sliderPos;
	}

	onTouchMove(event) {
		this.moveX = Math.round(event.touches[0].clientX);
		let diffX = this.startX - this.moveX;
		let newSliderPos = diffX + this.currentSliderPos;
		if (
			newSliderPos - this.state.itemWidth * (this.state.companyList.length - this.logoNb) >= 0 &&
			newSliderPos <= this.state.companyList.length * this.state.itemWidth - window.innerWidth
		) {
			this.setState({ sliderPos: newSliderPos });
		}
	}

	onTouchEnd() {
		this.slide();
	}

	render() {
		const logos = require.context('../../../assets/logos', true);
		const pressList = this.state.companyList.map((item, index) => {
			let logoSrc;
			if (item !== '') {
				logoSrc = logos(`./${item.name}`);
			}
			return (
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="LogoSlider__item"
					key={index}
					style={{
						backgroundImage: logoSrc !== undefined ? `url(${logoSrc})` : 'none',
						width: this.state.itemWidth
					}}
				>
					<span>{item.url}</span>
				</a>
			);
		});

		return (
			<div
				className={`LogoSlider ${this.props.isShowed ? 'LogoSlider--show' : ''}`}
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
			>
				<h2 className="Footer__title Footer__title--mobile">Ils m'ont fait confiance</h2>
				<div className="LogoSlider__container" style={{ width: this.state.itemWidth * 6 }}>
					<div className="LogoSlider__list" style={{ transform: `translateX(${-this.state.sliderPos}px)` }}>
						{pressList}
					</div>
				</div>
			</div>
		);
	}
}

export default LogoSlider;
