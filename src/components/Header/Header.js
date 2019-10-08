import React, { Component } from 'react';
import './Header.scss';
import LogoAdrienLapasset from '../../assets/logos/logo-adrien-lapasset.js';
import MaltIcon from '../../assets/icons/malt.js';
import LinkedinIcon from '../../assets/icons/linkedin.js';
import GithubIcon from '../../assets/icons/github.js';
import GitlabIcon from '../../assets/icons/gitlab.js';
import SpotifyIcon from '../../assets/icons/spotify.js';

class Header extends Component {
	constructor(props) {
		super(props);
		this.onClickLogo = this.onClickLogo.bind(this);
	}

	onClickLogo() {
		window.location.reload();
	}
	render() {
		return (
			<header className="header">
				<div className="header__logo" onClick={this.onClickLogo}>
					<LogoAdrienLapasset />
					Adrien Lapasset
				</div>
				<div className="header__links">
					<a href="https://www.malt.fr/profile/adrienlapasset" target="_blank" rel="noopener noreferrer">
						<MaltIcon />
					</a>
					<a
						href="https://www.linkedin.com/in/adrien-lapasset-87b3b164/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinIcon />
					</a>
					<a href="https://github.com/AdrienLapasset" target="_blank" rel="noopener noreferrer">
						<GithubIcon />
					</a>
					<a href="https://gitlab.com/aflapasset" target="_blank" rel="noopener noreferrer">
						<GitlabIcon />
					</a>
					<a
						href="https://open.spotify.com/user/oi47w80i0mijkwv6csawghdmo?si=-oyhqeCdQGmzHO5XWQk_2w"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SpotifyIcon />
					</a>
				</div>
			</header>
		);
	}
}

export default Header;
