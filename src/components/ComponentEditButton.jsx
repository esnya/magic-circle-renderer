import React from 'react';
import IconButton from './IconButton';

export type PropTypes = {
    isActive: boolean,
};
const ComponentEditButton = (props: PropTypes) => {
    const {
        isActive,
        ...others
    } = props;

    return (
        <IconButton isActive={isActive} name="pencil-square-o" {...others} />
    );
};
export default ComponentEditButton;
