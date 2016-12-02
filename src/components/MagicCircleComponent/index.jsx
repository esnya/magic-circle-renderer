import React from 'react';
import { rotation } from '../../styles/rotation.styl';
import Item, { ItemTypes } from '../../Item';
import Circle from './Circle';
import CircleText from './CircleText';
import Pentagram from './Pentagram';

const ComponentTypes = {
    [ItemTypes.CIRCLE]: Circle,
    [ItemTypes.CIRCLE_TEXT]: CircleText,
    [ItemTypes.PENTAGRAM]: Pentagram,
};

export type PropTypes = {
    item: Item,
};

const MagicCircleComponent = (props: PropTypes) => {
    const {
        item,
    } = props;

    const ChildComponent = ComponentTypes[item.type];
    if (!ChildComponent) throw new Error(`Unsupported Component Type: ${item.type}`);

    const rot = item.getAttribute('rotation');
    const rotDir = item.getAttribute('rotationDirection');

    const className = rot ? rotation : null;

    const style = rot ? {
        animationDuration: `${rot}s`,
        animationDirection: rotDir || null,
    } : null;

    return (
        <ChildComponent className={className} style={style} item={item} />
    );
};
export default MagicCircleComponent;
