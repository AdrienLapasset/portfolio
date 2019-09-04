import React, { Component } from 'react';
import Header from './components/Header/Header';
import Illustration from './components/Illustration/Illustration';
import Footer from './components/Footer/Footer';

class App extends Component {
	render() {
		return (
			<div className="Home">
				<Header />
				<div className="Home__body">
					<Illustration />
					<div className="Home__text">
						<p className="Home__text__hello">Bonjour,</p>
						<p>
							Je suis un développeur créatif (et occasionnellement designer) qui aime les sites
							responsive, le design minimaliste et les transitions en douceurs.
						</p>
						<p className="Home__text__contact">
							Pour me contacter c’est par ici :<br />
							<a href="mailto:mail@adrienlapasset.fr" target="_blank" rel="noopener noreferrer">
								mail@adrienlapasset.fr
							</a>
						</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
