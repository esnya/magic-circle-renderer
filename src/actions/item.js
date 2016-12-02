import { createAction } from 'redux-actions';

export const CREATE = 'ITEM/CREATE';
export const create = createAction(CREATE, (id: string, type: string) => ({ id, type }));

export const UPDATE = 'ITEM/UPDATE';
export const update = createAction(
    UPDATE,
    (id: string, key: string, value: any) => ({ id, key, value }),
);

export const REMOVE = 'ITEM/REMOVE';
export const remove = createAction(REMOVE, (id: string) => ({ id }));
