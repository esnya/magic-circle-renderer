import React from 'react';
import Component, { ComponentTypes, ComponentTypeLabels } from '../models/Component';
import * as Styles from '../styles/componentEditor.styl';
import ComponentEditorField from './ComponentEditorField';

export type PropTypes = {
    component: ?Component,
    onUpdate: (id: string, key: string, value: any) => void,
};
const ComponentEditor = (props: PropTypes) => {
    const {
        component,
        onUpdate,
    } = props;

    if (!component) return null;

    const hasText = (component.type === ComponentTypes.CIRCLE_TEXT);

    const fieldElements = [
        <dt key="radius-label">直径</dt>,
        <ComponentEditorField
            key="radius-field"
            attributeKey="radius"
            component={component}
            onUpdate={onUpdate}
        />,
        <dt key="rotation-label">回転周期</dt>,
        <ComponentEditorField
            key="rotation-field"
            attributeKey="rotation"
            component={component}
            onUpdate={onUpdate}
        />,
        <dt key="rotationDirection-label">回転方向</dt>,
        <ComponentEditorField
            key="rotationDirection-field"
            attributeKey="rotationDirection"
            component={component}
            onUpdate={onUpdate}
        />,
        hasText ? <dt key="fontSize-label">フォントサイズ</dt> : null,
        hasText ? (
            <ComponentEditorField
                key="fontSize-field"
                attributeKey="fontSize"
                component={component}
                onUpdate={onUpdate}
            />
        ) : null,
        hasText ? <dt key="text-label">テキスト</dt> : null,
        hasText ? (
            <ComponentEditorField
                key="text-field"
                attributeKey="text"
                component={component}
                onUpdate={onUpdate}
            />
        ) : null,
    ];

    return (
        <dl className={Styles.componentEditor}>
            <dt>タイプ</dt>
            <dd>{ComponentTypeLabels[component.type]}</dd>
            {fieldElements}
        </dl>
    );
};
export default ComponentEditor;
