import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ViewActions from '../actions/View';
import ViewAttributes from '../models/ViewAttributes';
import * as Styles from '../styles/form.styl';

export type PropTypes = {
    viewAttributes: ViewAttributes,
    onUpdateAngle: (angle: number) => void,
    onUpdatePerspective: (perspective: number) => void,
};
const RightPanel = (props: PropTypes) => {
    const {
        viewAttributes,
        onUpdateAngle,
        onUpdatePerspective,
    } = props;

    return (
        <div>
            <dl className={Styles.dlForm}>
                <dt>角度</dt>
                <dd>
                    <input
                        id="view-attributes-angle"
                        type="range"
                        max={90}
                        min={-90}
                        value={viewAttributes.angle}
                        onChange={e => onUpdateAngle(+e.target.value)}
                    />
                    <label htmlFor="view-attributes-angle">
                        {viewAttributes.angle}°
                    </label>
                </dd>
                <dt>視点距離</dt>
                <dd>
                    <input
                        id="view-attributes-perspective"
                        type="range"
                        max={1000}
                        min={0}
                        step={5}
                        value={viewAttributes.perspective}
                        onChange={e => onUpdatePerspective(+e.target.value)}
                    />
                    <label htmlFor="view-attributes-perspective">
                        {viewAttributes.perspective}cm
                    </label>
                </dd>
            </dl>
        </div>
    );
};
export default connect(
    state => pick(state, [
        'viewAttributes',
    ]),
    dispatch => bindActionCreators({
        onUpdateAngle: ViewActions.updateAngle,
        onUpdatePerspective: ViewActions.updatePerspective,
    }, dispatch),
)(RightPanel);
