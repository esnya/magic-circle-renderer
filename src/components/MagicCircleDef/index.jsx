import React from 'react';
import Component, { ComponentTypes } from '../../models/Component';
import CircleText from './CircleText';

const ComponentTable = {
    [ComponentTypes.CIRCLE_TEXT]: CircleText,
};

export type PropTypes = {
    component: Component,
};

const MagicCircleDef = (props: PropTypes) => {
    const {
        component,
    } = props;

    const ChildComponent = ComponentTable[component.type];
    if (!ChildComponent) return null;

    return <ChildComponent component={component} />;
};
export default MagicCircleDef;
