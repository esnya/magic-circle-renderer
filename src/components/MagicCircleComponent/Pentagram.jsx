import React from 'react';
import Component from '../../models/Component';

export type PropTypes = {
    component: Component,
    className: ?string,
    style: ?Object,
};

const points = [];

function getRad(i) {
    return (i * Math.PI * 144) / 180;
}

for (let i = 0; i < 6; i += 1) {
    const r = getRad(i);

    points.push([
        Math.sin(r),
        Math.cos(r),
    ]);
}

const Pentagram = (props: PropTypes) => {
    const {
        component,
        className,
        style,
    } = props;
    const radius = component.getAttribute('radius') || 0.5;

    const path = points
        .map(point => point.map(x => x * radius * 256))
        .map((point, i) => `${i === 0 ? 'M' : 'L'}${point.join(',')}`)
        .join('');

    return <path className={className} d={path} style={style} />;
};
export default Pentagram;
