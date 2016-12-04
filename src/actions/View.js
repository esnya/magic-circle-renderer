import { createAction } from 'redux-actions';

export const UPDATE_ANGLE = 'VIEW/UPDATE_ANGLE';
export const updateAngle = createAction(UPDATE_ANGLE, (angle: number) => ({ angle }));

export const UPDATE_PERSPECTIVE = 'VIEW/UPDATE_PERSPECTIVE';
export const updatePerspective =
    createAction(UPDATE_PERSPECTIVE, (perspective: number) => ({ perspective }));

export const UPDATE_SCALE = 'VIEW/UPDATE_SCALE';
export const updateScale =
    createAction(UPDATE_SCALE, (scale: number) => ({ scale }));
