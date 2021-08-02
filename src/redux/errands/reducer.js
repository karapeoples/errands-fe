import { SET_ERROR } from './actions';

const initialState = {
	errands: [],
	error: '',
};

const errandReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
        error: action.payload,
			};
		default:
			return state;
	}
};

export default errandReducer;
