import React from 'react';
import { rotation } from '../../styles/rotation.styl';
import Component, { ComponentTypes } from '../../models/Component';
import Circle from './Circle';
import CircleText from './CircleText';
import Pentagram from './Pentagram';

const ComponentTable = {
    [ComponentTypes.CIRCLE]: Circle,
    [ComponentTypes.CIRCLE_TEXT]: CircleText,
    [ComponentTypes.PENTAGRAM]: Pentagram,
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

    const rot = component.getAttribute('rotation');
    const rotDir = component.getAttribute('rotationDirection');

    const className = rot ? rotation : null;

    const style = rot ? {
        animationDuration: `${rot}s`,
        animationDirection: rotDir || null,
    } : null;

    return (
        <ChildComponent className={className} style={style} component={component} />
    );
};
export default MagicCircleComponent;
