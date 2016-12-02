import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as Styles from '../styles/app.styl';
import Canvas from './Canvas';

type PropTypes = {
    itemList: Array,
};
const App = (props: PropTypes) => (
    <div className={Styles.app}>
        <Canvas itemList={props.itemList} />
    </div>
);

export default connect(
    state => pick(state, 'itemList'),
)(App);
