import { pick } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ComponentActions from '../actions/Component';
import { ComponentType } from '../models/Component';
import ComponentEditor from './ComponentEditor';
import ComponentList from './ComponentList';

export type PropTypes = {
    componentList: Array,
    selectedComponentId: ?string,
    onCreateComponent: (id: string, type: ComponentType) => void,
    onEditComponent: (id: string) => void,
    onUpdateComponent: (id: string, key: string, value: any) => void,
    onRemoveComponent: (id: string) => void,
};
const LeftPanel = (props: PropTypes) => {
    const {
        componentList,
        selectedComponentId,
        onCreateComponent,
        onEditComponent,
        onUpdateComponent,
        onRemoveComponent,
    } = props;

    return (
        <div>
            <ComponentList
                componentList={componentList}
                selectedComponentId={selectedComponentId}
                onCreateComponent={onCreateComponent}
                onEditComponent={onEditComponent}
                onRemoveComponent={onRemoveComponent}
            />
            <ComponentEditor
                component={componentList.find(c => c.id === selectedComponentId)}
                onUpdate={onUpdateComponent}
            />
        </div>
    );
};
export default connect(
    state => pick(state, [
        'componentList',
        'selectedComponentId',
    ]),
    dispatch => bindActionCreators({
        onCreateComponent: ComponentActions.create,
        onEditComponent: ComponentActions.select,
        onUpdateComponent: ComponentActions.update,
        onRemoveComponent: ComponentActions.remove,
    }, dispatch),
)(LeftPanel);
