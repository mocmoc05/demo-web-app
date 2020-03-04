import { types } from "../actions";

const DEFAULT_STATE = {
    age: 10,
    posts: []
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };
        default: return state;
    }
}