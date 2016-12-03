import React from 'react';
import * as Styles from '../styles/button.styl';

export type PropTypes = {
    children: ?any,
    className: ?string,
    isActive: ?boolean,
};
const Button = (props: PropTypes) => {
    const {
        children,
        className,
        isActive,
        ...others
    } = props;

    const classNames = [
        Styles.button,
        className || null,
        isActive ? 'active' : null,
    ].filter(a => a);

    return (
        <button className={classNames.join(' ')} {...others}>
            {children}
        </button>
    );
};
export default Button;
