import { combineReducers } from 'redux';
import appReducer from './appReducer';
import leftRightReducer from './leftRightReducer';

const reducers = combineReducers({
    appReducer,
    leftRightReducer,
});
export default reducers;