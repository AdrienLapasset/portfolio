import React, { Component } from 'react';
import './Home.scss';
import Illustration from '../Illustration/Illustration';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1
		};
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
							Pour me contacter c’est par ici :<br />
							<a href="mailto:mail@adrienlapasset.fr" target="_blank" rel="noopener noreferrer">
								mail@adrienlapasset.fr
							</a>
						</p>
					</div>
				) : null : null}
			</div>
		);
	}
}

export default Home;
