import React from 'react';
import './Header.scss';
import logoAdrienLapasset from '../../assets/logos/logo-adrien-lapasset.svg';
import github from '../../assets/icons/github.svg';
import gitlab from '../../assets/icons/gitlab.svg';
import spotify from '../../assets/icons/spotify.svg';

function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img className="header__logo__icon" src={logoAdrienLapasset} alt="Logo Adrien Lapasset" />
				Adrien Lapasset
			</div>
			<div className="header__links">
				<img src={github} alt="" />
				<img src={gitlab} alt="" />
				<img src={spotify} alt="" />
			</div>
		</header>
	);
}

export default Header;
