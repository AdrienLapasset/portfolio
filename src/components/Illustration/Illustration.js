import React from 'react';
import Hair from './parts/Hair/Hair';
import Body from './parts/Body/Body';
import './Illustration.scss';

function Illustration() {
	return (
		<div className="illustration">
			<div className="character">
				<Hair />
				<Body />
			</div>
			<div className="shadow" />
		</div>
	);
}

export default Illustration;
