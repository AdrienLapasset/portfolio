import React from 'react';
import './Header.scss';
import logoAdrienLapasset from '../../assets/logos/logo-adrien-lapasset.svg';

function Header() {
	return (
		<header>
			<img src={logoAdrienLapasset} alt="Logo Adrien Lapasset" />
			Adrien Lapasset
		</header>
	);
}

export default Header;
