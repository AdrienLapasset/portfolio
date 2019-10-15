import React, { Component } from 'react';
import './Home.scss';
import Illustration from '../Illustration/Illustration';
import SwipeIcon from './SwipeIcon/SwipeIcon';
import CopyIcon from '../../assets/icons/copyIcon';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
			isEmailCopied: false
		};

		this.onClickEmail = this.onClickEmail.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps !== this.props) {
			if (!this.props.isSwipe && this.props.isTouch) {
				let newOpacity = 1 - this.props.diffY / 100;
				this.setState({ opacity: newOpacity });
			} else {
				this.setState({ opacity: 1 });
			}
		}
	}

	onClickEmail() {
		this.copyEmailToClipboard();
		this.setState({ isEmailCopied: true });
		setTimeout(() => {
			this.setState({ isEmailCopied: false });
		}, 2000);
	}

	copyEmailToClipboard() {
		let el = document.createElement('textarea');
		el.value = 'mail@adrienlapasset.fr';
		el.setAttribute('readonly', '');
		el.style = { position: 'absolute', left: '-9999px' };
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	render() {
		return (
			<div className="Home">
				{!this.props.isSwipe ? <Illustration opacity={this.state.opacity} /> : ''}
				{this.props.isFontLoaded ? !this.props.isMobile || this.props.isSwipe ? (
					<div className="Home__text" style={{ opacity: this.state.opacity }}>
						<p className="Home__text__hello">Bonjour,</p>
						<p>
							Je suis un développeur créatif (et occasionnellement designer) qui aime les sites
							responsive, le design minimaliste et les transitions en douceur.
						</p>
						<p className="Home__text__contact">
							Mon adresse email :
							<button className="Home__email" onClick={this.onClickEmail}>
								mail@adrienlapasset.fr
								<CopyIcon />
								{this.state.isEmailCopied ? (
									<span className="Home__email__feedback">Copié !</span>
								) : null}
							</button>
						</p>
					</div>
				) : null : null}
				{this.props.isMobile && !this.props.isSwipe ? <SwipeIcon /> : null}
			</div>
		);
	}
}

export default Home;
