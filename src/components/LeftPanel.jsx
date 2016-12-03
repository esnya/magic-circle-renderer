import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ComponentActions from '../actions/Component';
import { ComponentType } from '../models/Component';
import ComponentList from './ComponentList';

export type PropTypes = {
    componentList: Array,
    onCreateComponent: (id: string, type: ComponentType) => void,
    onEditComponent: (id: string) => void,
    onRemoveComponent: (id: string) => void,
};
const LeftPanel = (props: PropTypes) => {
    const {
        componentList,
        onCreateComponent,
        onEditComponent,
        onRemoveComponent,
    } = props;

    return (
        <div>
            <ComponentList
                componentList={componentList}
                onCreateComponent={onCreateComponent}
                onEditComponent={onEditComponent}
                onRemoveComponent={onRemoveComponent}
            />
        </div>
    );
};
export default connect(
    state => pick(state, 'componentList'),
    dispatch => bindActionCreators({
        onCreateComponent: ComponentActions.create,
        onEditComponent: (id: string) => console.log(id),
        onRemoveComponent: ComponentActions.remove,
    }, dispatch),
)(LeftPanel);
