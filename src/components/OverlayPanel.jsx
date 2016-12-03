import React from 'react';
import * as Styles from '../styles/panel.styl';
import LeftPanel from './LeftPanel';

const OverlayPanel = () => (
    <div className={Styles.overlayPanel}>
        <LeftPanel />
        <div />
        <div />
    </div>
);
export default OverlayPanel;
