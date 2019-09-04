import React, { Component } from 'react';

class Music extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songName: ''
		};
	}
	componentDidMount() {
		// oi47w80i0mijkwv6csawghdmo

		fetch('https://api.spotify.com/v1/me/player/recently-played', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization:
					'Bearer BQCRkk7ydICsEIrIKOJ1Vo2vTRFTjYlyI4XUTb5d5s28pkhjfk-OqrJxrNLFUkHlPXSealYDt61gN7X6YmKZslwM3ov-EqmOjLBlz94z8bMyP-IZxc-96fTc1cjSDYmxMuJ1CEOgjv5Mu4eZrLqY9BaAGmE8oq4jT-ZtcLExF6s'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ songName: data.items[0].track.name });
				console.log(this.state.songName);
			});
	}

	render() {
		return (
			<div>
				Dernier morceau écouté :
				{this.state.songName}
			</div>
		);
	}
}

export default Music;
