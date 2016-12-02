import React from 'react';
import Item, { ItemTypes } from '../../Item';
import CircleText from './CircleText';

const ComponentTypes = {
    [ItemTypes.CIRCLE_TEXT]: CircleText,
};

export type PropTypes = {
    item: Item,
};

const MagicCircleDef = (props: PropTypes) => {
    const {
        item,
    } = props;

    const ChildComponent = ComponentTypes[item.type];
    if (!ChildComponent) return null;

    return <ChildComponent item={item} />;
};
export default MagicCircleDef;
