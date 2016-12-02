import React from 'react';
import Item from '../../Item';

export function getId(item: Item) {
    return `def-${item.id}`;
}

export type PropTypes = {
    item: Item,
};

const CircleText = (props: PropTypes) => {
    const {
        item,
    } = props;
    const r = (item.getAttribute('radius') || 0.5) * 256;

    const path = [
        ['M', 0, -r],
        ['A', r, r, 180, 0, 1, 0, r],
        ['A', r, r, 180, 0, 1, 0, -r],
    ].map(a => a.join(' ')).join(' ');

    return <path id={getId(item)} d={path} />;
};
export default CircleText;
