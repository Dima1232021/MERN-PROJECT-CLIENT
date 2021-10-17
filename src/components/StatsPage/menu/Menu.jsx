import React from 'react';
import Dropdown from '../../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux'
import './menu.scss'
import { showingUsersAction, changePageAction, changeReferenceNumberAction } from '../../../reducers/usersReducer';

function Menu(props) {
	const dispatch = useDispatch()
	const showingUsers = useSelector(state => state.users.showingUsers)
	const items = [
		{ name: '50 users', value: 50 },
		{ name: '40 users', value: 40 },
		{ name: '30 users', value: 30 },
		{ name: '20 users', value: 20 }
	]



	function setValue(value) {
		dispatch(showingUsersAction(value))
		dispatch(changePageAction(1))
		dispatch(changeReferenceNumberAction(1))
	}


	return (
		<div className='menu'>
			<div className="container">
				<div className="menu__row">
					<div className="menu__showing-users">
						<h3 className='menu__title'>The table shows:</h3>
						<Dropdown
							items={items}
							defaultValue={showingUsers}
							setValue={setValue}
							className={'menu'}
						/>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Menu;