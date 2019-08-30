import React from 'react';
import './Header.scss';
import logoAdrienLapasset from '../../assets/logos/logo-adrien-lapasset.svg';

function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img className="header__logo__icon" src={logoAdrienLapasset} alt="Logo Adrien Lapasset" />
				Adrien Lapasset
			</div>
		</header>
	);
}

export default Header;
