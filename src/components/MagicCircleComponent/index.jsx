import React from 'react';
import { rotation } from '../../styles/rotation.styl';
import Component, { ComponentTypes } from '../../models/Component';
import Circle from './Circle';
import CircleText from './CircleText';
import Hexagram from './Hexagram';
import Pentagram from './Pentagram';

const ComponentTable = {
    [ComponentTypes.CIRCLE]: Circle,
    [ComponentTypes.CIRCLE_TEXT]: CircleText,
    [ComponentTypes.PENTAGRAM]: Pentagram,
    [ComponentTypes.HEXAGRAM]: Hexagram,
};

export type PropTypes = {
    component: Component,
};

const MagicCircleComponent = (props: PropTypes) => {
    const {
        component,
    } = props;

    const ChildComponent = ComponentTable[component.type];
    if (!ChildComponent) throw new Error(`Unsupported Component Type: ${component.type}`);

    const angle = component.getAttribute('angle');
    const rot = component.getAttribute('rotation');
    const rotDir = component.getAttribute('rotationDirection');

    const className = rot ? rotation : null;

    const innerStyle = rot ? {
        animationDuration: `${rot}s`,
        animationDirection: rotDir || null,
    } : null;

    const outerStyle = angle ? {
        transform: `rotate(${angle}deg)`,
    } : null;

    return (
        <g style={outerStyle}>
            <ChildComponent className={className} style={innerStyle} component={component} />
        </g>
    );
};
export default MagicCircleComponent;
