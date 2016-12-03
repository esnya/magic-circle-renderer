import React from 'react';
import * as Styles from '../styles/button.styl';
import Button from './Button';
import FAIcon from './FAIcon';

export type PropTypes = {
    name: string,
    iconProps: ?Object,
};
const IconButton = (props: PropTypes) => {
    const {
        name,
        iconProps,
        ...others
    } = props;

    return (
        <Button className={Styles.iconButton} {...others}>
            <FAIcon name={name} {...(iconProps || {})} />
        </Button>
    );
};
export default IconButton;
