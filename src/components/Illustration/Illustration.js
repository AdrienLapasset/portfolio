import React from 'react';
import Hair from './parts/Hair/Hair';
import Body from './parts/Body/Body';
import Background from './parts/Background/Background';
import './Illustration.scss';

function Illustration() {
	return (
		<div className="illustration">
			<div className="container">
				<div className="character">
					<Hair />
					<Body />
				</div>
				<div className="shadow" />
			</div>
			<Background />
		</div>
	);
}

export default Illustration;
