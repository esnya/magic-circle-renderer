import React from 'react';
import Item from '../../Item';
import { getId } from '../MagicCircleDef/CircleText';

export type PropTypes = {
    item: Item,
    className: ?string,
    style: ?Object,
};

const Circle = (props: PropTypes) => {
    const {
        item,
        className,
        style,
    } = props;
    const text = item.getAttribute('text') || '';
    const fontSize = item.getAttribute('fontSize');

    return (
        <text className={className} fontSize={fontSize} style={style}>
            <textPath xlinkHref={`#${getId(item)}`}>{text}</textPath>
        </text>
    );
};
export default Circle;
