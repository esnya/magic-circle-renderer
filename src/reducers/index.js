import { combineReducers } from 'redux';
import componentList from './componentList';
import controlIsVisible from './controlIsVisible';
import selectedComponentId from './selectedComponentId';
import viewAttributes from './viewAttributes';

export default combineReducers({
    componentList,
    controlIsVisible,
    selectedComponentId,
    viewAttributes,
});
