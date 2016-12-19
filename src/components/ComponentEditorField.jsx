import React from 'react';
import Component from '../models/Component';
import Select from './Select';

export type PropTypes = {
    attributeKey: string,
    component: Component,
    onUpdate: (id: string, key: string, value: any) => void,
};
const ComponentEditor = (props: PropTypes) => {
    const {
        attributeKey,
        component,
        onUpdate,
    } = props;

    const id = `component-editor-${component.id}-${attributeKey}`;
    const value = component.getAttribute(attributeKey);

    switch (attributeKey) {
    case 'radius':
        return (
            <dd>
                <input
                    id={id}
                    type="range"
                    max={100}
                    min={0}
                    value={value * 100}
                    onChange={e => onUpdate(component.id, attributeKey, +e.target.value / 100)}
                />
                <label htmlFor={id}>{value || 0.5}</label>
            </dd>
        );


    case 'angle':
        return (
            <dd>
                <input
                    id={id}
                    type="range"
                    max={360}
                    min={0}
                    value={value || 0}
                    onChange={e => onUpdate(component.id, attributeKey, +e.target.value)}
                />
                <label htmlFor={id}>{value || 0}</label>
            </dd>
        );

    case 'rotation':
        return (
            <dd>
                <input
                    id={id}
                    type="range"
                    max={120}
                    min={0}
                    value={value || 0}
                    onChange={e => onUpdate(component.id, attributeKey, +e.target.value)}
                />
                <label htmlFor={id}>{value || 0}</label>
            </dd>
        );

    case 'rotationDirection':
        return (
            <dd>
                <Select
                    id={id}
                    value={value || 'normal'}
                    onChange={e => onUpdate(component.id, attributeKey, e.target.value)}
                >
                    <option value="normal">normal</option>
                    <option value="reverse">reverse</option>
                </Select>
            </dd>
        );

    case 'fontSize':
        return (
            <dd>
                <input
                    id={id}
                    type="range"
                    max={120 * 2}
                    min={0}
                    value={(value || 0) * 2}
                    onChange={e => onUpdate(component.id, attributeKey, (+e.target.value) / 2)}
                />
                <label htmlFor={id}>{value || 0}</label>
            </dd>
        );

    case 'text':
        return (
            <dd>
                <textarea
                    rows={4}
                    value={value || ''}
                    onChange={e => onUpdate(component.id, attributeKey, e.target.value)}
                />
            </dd>
        );

    default:
        throw new Error(`Unexpected attribute key: ${attributeKey}`);
    }
};
export default ComponentEditor;
