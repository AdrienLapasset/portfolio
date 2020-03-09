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
		el.value = 'aflapasset@gmail.com';
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
						<p className="Home__text__contact">Pour me contacter c’est par ici :</p>
						<div className="Home__email">
							<a href="mailto:aflapasset@gmail.com" target="_blank" rel="noopener noreferrer">
								aflapasset@gmail.com
							</a>
							<button className="Home__email__copyBtn" onClick={this.onClickEmail}>
								<CopyIcon />
							</button>
							{this.state.isEmailCopied ? <span className="Home__email__feedback">Copiée !</span> : null}
						</div>
					</div>
				) : null : null}
				{this.props.isMobile && !this.props.isSwipe ? <SwipeIcon /> : null}
			</div>
		);
	}
}

export default Home;
