import React from 'react';
import * as Styles from '../styles/panel.styl';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

export type PropTypes = {
    isVisible: boolean,
};

const OverlayPanel = (props: PropTypes) => {
    const {
        isVisible,
    } = props;

    const className = [
        Styles.overlayPanel,
        isVisible ? Styles.visible : Styles.hidden,
    ].join(' ');

    return (
        <div className={className}>
            <LeftPanel />
            <div />
            <RightPanel />
        </div>
    );
};
export default OverlayPanel;
