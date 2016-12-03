import { handleActions } from 'redux-actions';
import * as Actions from '../actions/Component';
import Component from '../models/Component';

export default handleActions({
    [Actions.CREATE]: (state, { payload }) => {
        const {
            id,
            type,
        } = payload;

        return [
            ...state,
            new Component(id, type),
        ];
    },

    [Actions.UPDATE]: (state, { payload }) => {
        const {
            id,
            key,
            value,
        } = payload;

        return state.map(component => (
            component.id === id ? component.update(key, value) : component
        ));
    },

    [Actions.REMOVE]: (state, { payload }) => {
        const {
            id,
        } = payload;

        return state.filter(component => component.id !== id);
    },
}, []);
