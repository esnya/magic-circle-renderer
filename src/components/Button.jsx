import React from 'react';
import * as Styles from '../styles/button.styl';

export type PropTypes = {
    children: ?any,
    className: ?string,
};
const Button = (props: PropTypes) => {
    const {
        children,
        className,
        ...others
    } = props;

    const classNames = (className ? [className] : []).concat([
        Styles.button,
    ]);

    return (
        <button className={classNames.join(' ')} {...others}>
            {children}
        </button>
    );
};
export default Button;
