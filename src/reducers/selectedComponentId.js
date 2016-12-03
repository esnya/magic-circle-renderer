import { handleActions } from 'redux-actions';
import * as Actions from '../actions/Component';

function handler(state, { payload }) {
    const {
        id,
    } = payload;

    return state === id ? null : (id || null);
}

export default handleActions({
    [Actions.CREATE]: handler,
    [Actions.SELECT]: handler,
}, null);
