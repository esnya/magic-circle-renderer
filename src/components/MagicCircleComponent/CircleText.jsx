import React from 'react';
import Component from '../../models/Component';
import { getId } from '../MagicCircleDef/CircleText';

export type PropTypes = {
    component: Component,
    className: ?string,
    style: ?Object,
};

const Circle = (props: PropTypes) => {
    const {
        component,
        className,
        style,
    } = props;
    const text = component.getAttribute('text') || '';
    const fontSize = component.getAttribute('fontSize');

    return (
        <text className={className} fontSize={fontSize} style={style}>
            <textPath xlinkHref={`#${getId(component)}`}>{text}</textPath>
        </text>
    );
};
export default Circle;
