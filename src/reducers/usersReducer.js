const CHANGE_WAIT = 'CHANGE_WAIT';
const ADD_MENY_USERS = 'ADD_MENY_USERS';
const CHANGE_SHOWING_USER = 'CHANGE_SHOWING_USER';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_REFERENCE_NUMBER = 'CHANGE_REFERENCE_NUMBER';

const defaultState = {
	wait: false,
	users: [],
	showingUsers:
		Number(localStorage.getItem('showingUsers')) === 0
			? 50
			: Number(localStorage.getItem('showingUsers')),
	pages:
		Number(localStorage.getItem('pages')) === 0
			? null
			: Number(localStorage.getItem('pages')),

	currentlyPage:
		Number(localStorage.getItem('currentlyPage')) === 0
			? 1
			: Number(localStorage.getItem('currentlyPage')),

	referenceNumber:
		Number(localStorage.getItem('referenceNumber')) === 0
			? 1
			: Number(localStorage.getItem('referenceNumber')),
};

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_WAIT:
			return { ...state, wait: action.payload };

		case ADD_MENY_USERS:
			const { userData, pages } = action.payload;
			return { ...state, users: userData, pages, wait: false };

		case CHANGE_SHOWING_USER:
			localStorage.setItem('showingUsers', action.payload.toString());
			return { ...state, showingUsers: action.payload };

		case CHANGE_PAGE:
			localStorage.setItem('currentlyPage', action.payload.toString());
			return { ...state, currentlyPage: action.payload };

		case CHANGE_REFERENCE_NUMBER:
			localStorage.setItem('referenceNumber', action.payload.toString());
			return { ...state, referenceNumber: action.payload };

		default:
			return state;
	}
};

export const changeWaitAction = payload => ({
	type: CHANGE_WAIT,
	payload: payload,
});
export const addMenyUsersAction = payload => ({
	type: ADD_MENY_USERS,
	payload: payload,
});
export const showingUsersAction = payload => ({
	type: CHANGE_SHOWING_USER,
	payload: payload,
});
export const changePageAction = payload => ({
	type: CHANGE_PAGE,
	payload: payload,
});
export const changeReferenceNumberAction = payload => ({
	type: CHANGE_REFERENCE_NUMBER,
	payload: payload,
});
