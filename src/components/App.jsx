import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as ControlActions from '../actions/Control';
import ViewAttributes from '../models/ViewAttributes';
import * as Styles from '../styles/app.styl';
import Canvas from './Canvas';
import OverlayPanel from './OverlayPanel';

type PropTypes = {
    componentList: Array,
    controlIsVisible: boolean,
    viewAttributes: ViewAttributes,
    onTouchTap: () => void,
};
const App = (props: PropTypes) => {
    const {
        componentList,
        controlIsVisible,
        viewAttributes,
        onTouchTap,
    } = props;

    return (
        <div className={Styles.app} onTouchTap={onTouchTap}>
            <div className={Styles.inner}>
                <Canvas
                    angle={viewAttributes.angle}
                    componentList={componentList}
                    perspective={viewAttributes.perspective}
                />
            </div>
            <OverlayPanel isVisible={controlIsVisible} />
        </div>
    );
};
export default connect(
    state => pick(state, [
        'componentList',
        'controlIsVisible',
        'viewAttributes',
    ]),
    dispatch => ({
        onTouchTap: (e) => {
            if (e.target.tagName === 'DIV') {
                dispatch(ControlActions.toggle());
            }
        },
    }),
)(App);
