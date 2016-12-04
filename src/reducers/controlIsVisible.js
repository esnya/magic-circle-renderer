import { handleActions } from 'redux-actions';
import * as Actions from '../actions/Control';

export default handleActions({
    [Actions.TOGGLE]: state => !state,
}, false);
