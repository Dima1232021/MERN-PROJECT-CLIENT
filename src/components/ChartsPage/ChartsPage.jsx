import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import CalendarForm from './calendarForm/CalendarForm';
import { dataUser } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../navbar/Navbar';

import './ChartsPage.scss'
import Chart from './chart/Chart';


function ChartsPage() {
	const { state } = useLocation();
	const dispatch = useDispatch()
	const startDate = useSelector(state => state.user.startDate)
	const endDate = useSelector(state => state.user.endDate)
	const userData = useSelector(state => state.user.userData)







	useEffect(() => {
		dispatch(dataUser({ linkId: state.linkId, startDate, endDate }))

	}, [state.linkId, startDate, endDate])

	return (
		<div className='charts'>
			<Header />
			<Navbar charts={true} />
			<div className="container">
				<div className="charts__row">
					<h3 className="charts__name">{state.name}</h3>
					<CalendarForm />
				</div>
				<div className="charts__row">
					<h4 className="charts__title">
						Clicks
					</h4>

					<Chart userData={userData} dataKey='clicks' nameInTooltip='clicks' />
				</div>
				<div className="charts__row">
					<h4 className="charts__title">
						Views
					</h4>
					<Chart userData={userData} dataKey='page_views' nameInTooltip='views' />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ChartsPage;