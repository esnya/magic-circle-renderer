import React from 'react';
import Component from '../../models/Component';

export function getId(component: Component) {
    return `def-${component.id}`;
}

export type PropTypes = {
    component: Component,
};

const CircleText = (props: PropTypes) => {
    const {
        component,
    } = props;
    const r = (component.getAttribute('radius') || 0.5) * 256;

    const path = [
        ['M', 0, -r],
        ['A', r, r, 180, 0, 1, 0, r],
        ['A', r, r, 180, 0, 1, 0, -r],
    ].map(a => a.join(' ')).join(' ');

    return <path id={getId(component)} d={path} />;
};
export default CircleText;
