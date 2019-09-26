import React, { Component } from 'react';
import LogoSlider from './LogoSlider/LogoSlider';
import './Footer.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowed: false,
			positionY: null,
			isLogoTouched: false
		};

		this.toggleFooter = this.toggleFooter.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	initPosition = 60;

	componentDidMount() {
		if (this.props.isMobile) {
			this.setState({ positionY: this.initPosition });
		} else {
			this.setState({ positionY: null });
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			if (!this.state.isLogoTouched || !this.state.isShowed) {
				this.handlePositionY();
			}

			if (!this.props.isTouch && !this.state.isShowed && this.props.isMobile) {
				this.setState({ positionY: this.initPosition });
			}
		}
	}

	updateWindowDimensions() {
		if (window.innerWidth < 992) {
			this.setState({ isShowed: false });
		}
		if (window.innerWidth >= 992) {
			window.setTimeout(() => {
				this.setState({ isShowed: true });
			}, 4000);
		}
	}

	toggleFooter() {
		if (!this.props.isMobile) {
			this.setState((state) => ({
				isShowed: !state.isShowed
			}));
			this.props.isShowed(this.state.isShowed);
		}
	}

	handleLogoTouched = (state) => {
		this.setState({ isLogoTouched: state });
	};

	handlePositionY() {
		if (this.props.diffY > 0 && this.props.diffY < this.initPosition && this.state.positionY !== 0) {
			this.setState({ positionY: this.initPosition - this.props.diffY });
		}

		if (this.props.diffY >= this.initPosition && !this.state.isShowed) {
			this.setState({ isShowed: true });
			this.setState({ positionY: 0 });
		}

		if (
			this.props.diffY < 0 &&
			this.props.diffY > -this.initPosition &&
			this.state.positionY !== this.initPosition
		) {
			this.setState({ positionY: -this.props.diffY });
			this.setState({ isShowed: false });
		}
	}

	render() {
		return (
			<div
				onClick={this.toggleFooter}
				className={`Footer 
				${this.state.isShowed ? 'Footer--show' : ''}
				${!this.props.isTouch ? 'Footer--transition' : ''}`}
				style={{ transform: `translateY(${this.state.positionY}px)` }}
			>
				<h2 className="Footer__title">Ils m'ont fait confiance</h2>
				<LogoSlider isShowed={this.state.isShowed} isTouched={this.handleLogoTouched} />
			</div>
		);
	}
}

export default Footer;
