import React from 'react';
import Users from './users/Users';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Menu from './menu/Menu'
import Pagination from './pagination/Pagination';
import Navbar from '../navbar/Navbar';

import './StatsPage.scss'

function StatsPage() {
	return (
		<div className='stats'>
			<Header />
			<Navbar />
			<Menu />

			<div className="container">
				<h1 className='stats__title'>Users statistics</h1>
				<div className="stats__responsive">
					<table className='stats__table'>
						<thead className='stats__thead'>
							<tr className='stats__tr'>
								<th>Id</th>
								<th>First name</th>
								<th>Last name</th>
								<th>Email</th>
								<th>Gender</th>
								<th>IP address</th>
								<th>Total clicks</th>
								<th>Total page views</th>
							</tr>
						</thead>
						<Users />
					</table>
				</div>
			</div>

			<Pagination />
			<Footer />
		</div>
	);
}

export default StatsPage;