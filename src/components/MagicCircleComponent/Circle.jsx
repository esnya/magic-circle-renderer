import React from 'react';
import Item from '../../Item';

export type PropTypes = {
    item: Item,
};

const Circle = (props: PropTypes) => {
    const {
        item,
    } = props;
    const radius = item.getAttribute('radius') || 0.5;

    return <circle r={radius * 256} />;
};
export default Circle;
