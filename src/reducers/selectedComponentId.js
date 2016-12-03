import { handleActions } from 'redux-actions';
import * as Actions from '../actions/Component';

export default handleActions({
    [Actions.SELECT]: (state, { payload }) => {
        const {
            id,
        } = payload;

        return state === id ? null : (id || null);
    },
}, null);
