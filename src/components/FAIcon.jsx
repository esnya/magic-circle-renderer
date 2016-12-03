import React from 'react';

export type PropTypes = {
    name: string,
    className: ?string,
};
const FAIcon = (props: PropTypes) => {
    const {
        name,
        className,
        ...others
    } = props;

    const classNames = (className ? [className] : []).concat([
        'fa',
        'fa-inverse',
        `fa-${name}`,
    ]);

    return <i className={classNames.join(' ')} {...others} />;
};
export default FAIcon;
