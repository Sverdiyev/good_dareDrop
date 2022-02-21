import { createStore } from 'redux';

export const ACTIONS = { SET_USER_NAMES: 'setUserNames' };
const initialState = { userNames: null };
const storeReducer = (state = initialState, action) => {
	if (action.type === ACTIONS.SET_USER_NAMES) {
		return { ...state, userNames: action.payload.userNames };
	}

	return state;
};

const store = createStore(storeReducer);

export default store;
