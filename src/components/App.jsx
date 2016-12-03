import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as Styles from '../styles/app.styl';
import Canvas from './Canvas';
import OverlayPanel from './OverlayPanel';

type PropTypes = {
    componentList: Array,
};
const App = (props: PropTypes) => {
    const {
        componentList,
    } = props;

    return (
        <div className={Styles.app}>
            <div className={Styles.inner}>
                <Canvas componentList={componentList} />
            </div>
            <OverlayPanel />
        </div>
    );
};
export default connect(
    state => pick(state, 'componentList'),
)(App);
