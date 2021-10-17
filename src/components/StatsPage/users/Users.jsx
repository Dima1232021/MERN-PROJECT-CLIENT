import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Users(props) {
	const router = useHistory()
	const Users = useSelector(state => state.users.users)

	return (
		<tbody className='stats__tbody'>
			{Users.map(currentValue => {
				return (
					<tr
						key={currentValue.id}
						onClick={() => router.push({
							pathname: `/charts/${currentValue.id}`,
							state: { name: `${currentValue.first_name} ${currentValue.last_name}`, linkId: currentValue.id },
						})}
					>
						<td>{currentValue.id}</td>
						<td>{currentValue.first_name}</td>
						<td>{currentValue.last_name}</td>
						<td>{currentValue.email}</td>
						<td>{currentValue.gender}</td>
						<td>{currentValue.ip_address}</td>
						<td>{currentValue.clicks}</td>
						<td>{currentValue.page_views}</td>
					</tr>
				)
			})}
		</tbody>
	);
}

export default Users;