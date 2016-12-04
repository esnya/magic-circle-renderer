import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as ControlActions from '../actions/Control';
import * as Styles from '../styles/app.styl';
import Canvas from './Canvas';
import OverlayPanel from './OverlayPanel';

type PropTypes = {
    componentList: Array,
    controlIsVisible: boolean,
    onTouchTap: () => void,
};
const App = (props: PropTypes) => {
    const {
        componentList,
        controlIsVisible,
        onTouchTap,
    } = props;

    return (
        <div className={Styles.app} onTouchTap={onTouchTap}>
            <div className={Styles.inner}>
                <Canvas componentList={componentList} />
            </div>
            <OverlayPanel isVisible={controlIsVisible} />
        </div>
    );
};
export default connect(
    state => pick(state, [
        'componentList',
        'controlIsVisible',
    ]),
    dispatch => ({
        onTouchTap: (e) => {
            if (e.target.tagName === 'DIV') {
                dispatch(ControlActions.toggle());
            }
        },
    }),
)(App);
