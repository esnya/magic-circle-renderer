import { createAction } from 'redux-actions';

export const CREATE = 'COMPONENT/CREATE';
export const create = createAction(CREATE, (id: string, type: string) => ({ id, type }));

export const SELECT = 'COMPONENT/SELECT';
export const select = createAction(
    SELECT,
    (id: string) => ({ id }),
);

export const UPDATE = 'COMPONENT/UPDATE';
export const update = createAction(
    UPDATE,
    (id: string, key: string, value: any) => ({ id, key, value }),
);

export const REMOVE = 'COMPONENT/REMOVE';
export const remove = createAction(REMOVE, (id: string) => ({ id }));
