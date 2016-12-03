import React from 'react';
import * as Styles from '../styles/select.styl';

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
        Styles.select,
    ]);

    return (
        <select className={classNames.join(' ')} {...others}>
            {children}
        </select>
    );
};
export default Button;
