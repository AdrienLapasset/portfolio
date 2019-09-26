import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			diffY: 0,
			opacity: 1,
			isSwipe: false,
			isMobile: false,
			isTouch: false,
			isFooterShowed: false
		};
		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	startY = null;
	moveX = null;

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
			console.log(newDiffY);
			if (newDiffY > -100 && newDiffY < 100) {
				this.setState({ diffY: newDiffY });
			} else if (newDiffY >= 100 && !this.state.isSwipe) {
				this.setState({ isSwipe: true, diffY: 0 });
			} else if (newDiffY <= -100 && this.state.isSwipe && !this.state.isFooterShowed) {
				this.setState({ isSwipe: false, diffY: 0 });
			}
		}
	}

	onTouchEnd() {
		if (this.state.isMobile) {
			this.setState({ isTouch: false, diffY: 0 });
		}
	}

	handleFooterShowed = (state) => {
		this.setState({ isFooterShowed: state });
	};

	render() {
		return (
			<div
				className="App"
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
			>
				<Header />
				<Home
					isMobile={this.state.isMobile}
					isSwipe={this.state.isSwipe}
					isTouch={this.state.isTouch}
					diffY={this.state.diffY}
				/>
				{this.state.isSwipe || !this.state.isMobile ? (
					<Footer
						isMobile={this.state.isMobile}
						isSwipe={this.state.isSwipe}
						isTouch={this.state.isTouch}
						diffY={this.state.diffY}
						isShowed={this.handleFooterShowed}
					/>
				) : null}
			</div>
		);
	}
}

export default App;
