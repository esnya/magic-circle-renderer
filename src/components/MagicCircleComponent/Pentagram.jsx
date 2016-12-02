import React from 'react';
import Item from '../../Item';

export type PropTypes = {
    item: Item,
    className: ?string,
    style: ?Object,
};

const points = [];

function tri2rad(i) {
    return (i * Math.PI * 2) / 3;
}

for (let i = 0; i < 4; i += 1) {
    const r = tri2rad(i);

    points.push([
        Math.sin(r),
        Math.cos(r),
    ]);
}
for (let i = 0; i < 4; i += 1) {
    const r = tri2rad(i) + Math.PI;

    points.push([
        Math.sin(r),
        Math.cos(r),
    ]);
}

const Pentagram = (props: PropTypes) => {
    const {
        item,
        className,
        style,
    } = props;
    const radius = item.getAttribute('radius') || 0.5;

    const path = points
        .map(point => point.map(x => x * radius * 256))
        .map((point, i) => `${i % 4 ? 'L' : 'M'}${point.join(',')}`)
        .join('');

    return <path className={className} d={path} style={style} />;
};
export default Pentagram;
