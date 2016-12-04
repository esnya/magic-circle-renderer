import { handleActions } from 'redux-actions';
import * as Actions from '../actions/View';
import ViewAttributes from '../models/ViewAttributes';

export default handleActions({
    [Actions.UPDATE_ANGLE]:
        (state, { payload }) =>
            state.updateAngle(payload.angle),
    [Actions.UPDATE_PERSPECTIVE]:
        (state, { payload }) =>
            state.updatePerspective(payload.perspective),
}, new ViewAttributes());
