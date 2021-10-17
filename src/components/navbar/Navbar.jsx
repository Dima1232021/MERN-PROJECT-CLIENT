import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss'

function Navbar({ charts }) {

	if (charts) {
		return (
			<nav className='navbar'>
				<div className="container">
					<ul className='navbar__list'>
						<li>
							<NavLink className='navbar__link' to='/main' >Main page</NavLink><span className='navbar__arrow'></span>
						</li>
						<li>
							<NavLink className='navbar__link' to='/stats'>User satistics</NavLink><span className='navbar__arrow'></span>
						</li>
						<li className='navbar__link activ' >
							Samuel Frost
						</li>
					</ul>
				</div>
			</nav>
		)
	}

	return (
		<nav className='navbar'>
			<div className="container">
				<ul className='navbar__list'>
					<li>
						<NavLink to='/main' className='navbar__link'>Main page</NavLink>
						<span className='navbar__arrow'></span>
					</li>
					<li className='navbar__link activ'>
						User satistics
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;