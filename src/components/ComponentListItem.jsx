import React from 'react';
import Component, { ComponentTypeLabels } from '../models/Component';
import ComponentEditButton from './ComponentEditButton';
import ComponentRemoveButton from './ComponentRemoveButton';

/*
const ExceptedKeys = [
    'radius',
    'rotation',
    'rotationDirection',
];
*/

export type PropTypes = {
    component: Component,
    onEdit: (id: string) => void,
    onRemove: (id: string) => void,
};
const ComponentListItem = (props: PropTypes) => {
    const {
        component,
        onEdit,
        onRemove,
    } = props;

    const typeLabel = ComponentTypeLabels[component.type];
    if (!typeLabel) throw new Error(`Invalid component type ${component.type}`);

    return (
        <tr>
            <td><ComponentEditButton onTouchTap={() => onEdit(component.id)} /></td>
            <td>{typeLabel}</td>
            <td>{component.getAttribute('radius') || ''}</td>
            <td>{component.getAttribute('rotation') || ''}</td>
            <td>{component.getAttribute('rotationDirection') || ''}</td>
            <td><ComponentRemoveButton onTouchTap={() => onRemove(component.id)} /></td>
        </tr>
    );
};
export default ComponentListItem;
