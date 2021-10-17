import axios from 'axios';
import { addUserDataAction } from '../reducers/userReducer';
import { API_URL } from '../config';

export const dataUser = ({ linkId, startDate, endDate }) => {
	return async dispatch => {
		try {
			const response = await axios.post(`${API_URL}/api/data/user/${linkId}`, {
				startDate,
				endDate,
			});
			dispatch(addUserDataAction(response.data.userDataArray));
		} catch (e) {
			console.log(e);
		}
	};
};
