import { combineReducers } from 'redux';
import componentList from './componentList';
import selectedComponentId from './selectedComponentId';

export default combineReducers({
    componentList,
    selectedComponentId,
});
