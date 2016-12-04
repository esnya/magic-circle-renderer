import { combineReducers } from 'redux';
import componentList from './componentList';
import controlIsVisible from './controlIsVisible';
import selectedComponentId from './selectedComponentId';

export default combineReducers({
    componentList,
    controlIsVisible,
    selectedComponentId,
});
