import React, { Component } from 'react';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Illustration from './components/Illustration/Illustration';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Music />
				<Illustration />
			</div>
		);
	}
}

export default App;
