import React from 'react';
import Component, { ComponentType } from '../models/Component';
import * as Styles from '../styles/componentList.styl';
import ComponentListFooter from './ComponentListFooter';
import ComponentListHeader from './ComponentListHeader';
import ComponentListItem from './ComponentListItem';

export type PropTypes = {
    componentList: Array<Component>,
    selectedComponentId: ?string,
    onCreateComponent: (id: string, type: ComponentType) => void,
    onEditComponent: (id: string) => void,
    onRemoveComponent: (id: string) => void,
};
const ComponentList = (props: PropTypes) => {
    const {
        componentList,
        selectedComponentId,
        onCreateComponent,
        onEditComponent,
        onRemoveComponent,
    } = props;

    const componentElements = componentList.map(component => (
        <ComponentListItem
            key={component.id}
            component={component}
            isActive={component.id === selectedComponentId}
            onEdit={onEditComponent}
            onRemove={onRemoveComponent}
        />
    ));

    return (
        <table className={Styles.componentList}>
            <ComponentListHeader />
            <tbody>
                {componentElements}
            </tbody>
            <ComponentListFooter onCreateComponent={onCreateComponent} />
        </table>
    );
};
export default ComponentList;
