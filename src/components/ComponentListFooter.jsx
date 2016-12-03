import React from 'react';
import shortid from 'shortid';
import { ComponentType, ComponentTypes, ComponentTypeLabels } from '../models/Component';
import Select from './Select';

export type PropTypes = {
    onCreateComponent: (id: string, type: ComponentType) => void,
};

const ComponentListFooter = (props: PropTypes) => {
    const {
        onCreateComponent,
    } = props;

    const typeOptions = Object.keys(ComponentTypes)
        .map((key) => {
            const value = ComponentTypes[key];
            const label = ComponentTypeLabels[value];

            return (
                <option key={key} value={value}>
                    {label}
                </option>
            );
        });
    const onChange = (e) => {
        const value = e.target.value;
        if (value) onCreateComponent(shortid.generate(), value);
    };

    return (
        <tfoot>
            <tr>
                <th colSpan={6}>
                    <Select value="" onChange={onChange}>
                        <option value="">
                            (新規作成)
                        </option>
                        {typeOptions}
                    </Select>
                </th>
            </tr>
        </tfoot>
    );
};
export default ComponentListFooter;
