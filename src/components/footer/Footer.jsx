import React from 'react';
import './footer.scss'

function Footer(props) {
	return (
		<div className='footer'>
			<div className="container">
				<div className="footer__row">
					<h2 className="footer__title">AppCo</h2>
					<p className="footer__text">All rights reserved by ThemeTags</p>
					<p className="footer__text">Copyrights © 2019.</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;