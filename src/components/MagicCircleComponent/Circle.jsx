import React from 'react';
import Component from '../../models/Component';

export type PropTypes = {
    component: Component,
};

const Circle = (props: PropTypes) => {
    const {
        component,
    } = props;
    const radius = component.getAttribute('radius') || 0.5;

    return <circle r={radius * 256} />;
};
export default Circle;
