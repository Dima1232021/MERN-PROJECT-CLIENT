// import { createStore, applyMiddleware } from 'redux';
// import { usersReducer } from './usersReducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

// export const store = createStore(
// 	usersReducer,
// 	composeWithDevTools(applyMiddleware(thunk))
// );

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { userReducer } from './userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	user: userReducer,
	users: usersReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
