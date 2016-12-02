import { handleActions } from 'redux-actions';
import * as Actions from '../actions/item';
import Item from '../Item';

export default handleActions({
    [Actions.CREATE]: (state, { payload }) => {
        const {
            id,
            type,
        } = payload;

        return [
            ...state,
            new Item(id, type),
        ];
    },

    [Actions.UPDATE]: (state, { payload }) => {
        const {
            id,
            key,
            value,
        } = payload;

        return state.map(item => (
            item.id === id ? item.update(key, value) : item
        ));
    },

    [Actions.REMOVE]: (state, { payload }) => {
        const {
            id,
        } = payload;

        return state.filter(item => item.id !== id);
    },
}, []);
