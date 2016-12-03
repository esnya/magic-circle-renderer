import React from 'react';

export type PropTypes = {
    name: string,
    className: ?string,
    inverse: ?boolean,
};
const FAIcon = (props: PropTypes) => {
    const {
        name,
        className,
        inverse,
        ...others
    } = props;

    const classNames = [
        'fa',
        inverse ? 'fa-inverse' : null,
        `fa-${name}`,
        className || null,
    ].filter(a => Boolean(a));

    return <i className={classNames.join(' ')} {...others} />;
};
export default FAIcon;
