import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { dataUsers } from '../actions/users';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './app.scss'

import MainPage from './MainPage/MainPage'
import StatsPage from './StatsPage/StatsPage'
import ChartsPage from './ChartsPage/ChartsPage'


function App() {
	const dispatch = useDispatch()
	const showingUsers = useSelector(state => state.users.showingUsers)
	const currentlyPage = useSelector(state => state.users.currentlyPage)

	useEffect(() => {
		dispatch(dataUsers({ showingUsers, currentlyPage }))
	}, [showingUsers, currentlyPage])


	return (
		<BrowserRouter >
			<div className='wrapper'>
				<Switch>
					<Route path='/main' component={MainPage} />
					<Route path='/stats' component={StatsPage} />
					<Route path='/charts/:id' component={ChartsPage} />
					<Redirect to='/main' />
				</Switch>
			</div>
		</BrowserRouter>

	);
}

export default App;
