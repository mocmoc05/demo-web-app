import { types } from '../actions';
const DEFAULT_STATE = {
    number: 0,
    name: 'JS'
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.CHANGE_NUMBER:
            return {
                ...state,
                number: action.payload
            };
        default:
            return state;
    }
}