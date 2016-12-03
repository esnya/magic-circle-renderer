import React from 'react';
import * as Styles from '../styles/button.styl';
import Button from './Button';
import FAIcon from './FAIcon';

export type PropTypes = {
    name: string,
    isActive: ?boolean,
    className: ?string,
    iconProps: ?Object,
};
const IconButton = (props: PropTypes) => {
    const {
        name,
        className,
        isActive,
        iconProps,
        ...others
    } = props;

    const classNames = [
        Styles.iconButton,
        className || null,
    ].filter(a => Boolean(a));

    return (
        <Button className={classNames.join(' ')} isActive={isActive} {...others}>
            <FAIcon name={name} inverse={!isActive} {...(iconProps || {})} />
        </Button>
    );
};
export default IconButton;
