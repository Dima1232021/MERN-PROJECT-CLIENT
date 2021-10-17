import axios from 'axios';
import { addMenyUsersAction, changeWaitAction } from '../reducers/usersReducer';
import { API_URL } from '../config';

export const dataUsers = ({ showingUsers, currentlyPage }) => {
	return async dispatch => {
		try {
			dispatch(changeWaitAction(true));
			const response = await axios.post(`${API_URL}/api/data/users`, {
				limitElements: showingUsers,
				currentlyPage,
			});

			dispatch(
				addMenyUsersAction({
					userData: response.data.userData,
					pages: response.data.pages,
				})
			);
		} catch (e) {
			console.log(e);
		}
	};
};
