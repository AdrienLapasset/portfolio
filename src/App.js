import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Observer from 'fontfaceobserver';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diffY: 0,
			opacity: 1,
			isSwipe: false,
			isMobile: false,
			isTouch: false,
			isFontLoaded: false
		};
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	startY = null;
	moveX = null;
	isFooterShowed = false;

	componentDidMount() {
		const font = new Observer('Regular-Semibold');
		font.load(null, 100000).then(() => {
			this.setState({ isFontLoaded: true });
		});

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
		if (window.innerWidth >= 992) {
			this.setState({ isMobile: false, isSwipe: false });
		}
	}

	onTouchStart(event) {
		if (this.state.isMobile) {
			this.startY = event.touches[0].clientY;
			this.setState({ isTouch: true });
		}
	}

	onTouchMove(event) {
		if (this.state.isMobile) {
			this.moveY = event.touches[0].clientY;
			let newDiffY = this.startY - this.moveY;
			if (newDiffY < 100) {
				this.setState({ diffY: newDiffY });
			} else if (newDiffY >= 100 && !this.state.isSwipe) {
				this.setState({ isSwipe: true, diffY: 0 });
			}
			if (newDiffY < -100 && !this.isFooterShowed) {
				this.setState({ isSwipe: false, diffY: 0 });
			}
		}
	}

	onTouchEnd() {
		if (this.state.isMobile) {
			this.setState({ isTouch: false, diffY: 0 });
		}
	}

	handleFooterShowed = (isFooterShowed) => {
		this.isFooterShowed = isFooterShowed;
	};

	render() {
		return (
			<div
				className="App"
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
			>
				{this.state.isFontLoaded ? <Header /> : ''}
				<Home
					isMobile={this.state.isMobile}
					isSwipe={this.state.isSwipe}
					isTouch={this.state.isTouch}
					diffY={this.state.diffY}
					isFontLoaded={this.state.isFontLoaded}
				/>
				{this.state.isFontLoaded ? this.state.isSwipe || !this.state.isMobile ? (
					<Footer
						isMobile={this.state.isMobile}
						isSwipe={this.state.isSwipe}
						isTouch={this.state.isTouch}
						diffY={this.state.diffY}
						isShowed={this.handleFooterShowed}
					/>
				) : null : null}
			</div>
		);
	}
}

export default App;
