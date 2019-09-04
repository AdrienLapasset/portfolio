import React from 'react';
import './Header.scss';
import logoAdrienLapasset from '../../assets/logos/logo-adrien-lapasset.svg';
import GithubIcon from '../../assets/icons/github.js';
import GitlabIcon from '../../assets/icons/gitlab.js';
import SpotifyIcon from '../../assets/icons/spotify.js';

function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img className="header__logo__icon" src={logoAdrienLapasset} alt="Logo Adrien Lapasset" />
				Adrien Lapasset
			</div>
			<div className="header__links">
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

export default Header;
