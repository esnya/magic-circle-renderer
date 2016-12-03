export type ComponentType = string;

export const ComponentTypes = {
    CIRCLE: ('COMPONENT_TYPE_CIRCLE' : ComponentType),
    CIRCLE_TEXT: ('COMPONENT_TYPE_CIRCLE_TEXT' : ComponentType),
    HEXAGRAM: ('COMPONENT_TYPE_HEXAGRAM' : ComponentType),
};

export const ComponentTypeLabels = {
    [ComponentTypes.CIRCLE]: '円',
    [ComponentTypes.CIRCLE_TEXT]: 'テキスト(円)',
    [ComponentTypes.HEXAGRAM]: '六芒星',
};

const PrivateKeys = {
    id: Symbol('id'),
    type: Symbol('type'),
    data: Symbol('data'),
};

export default class Component {
    constructor(id: string, type: ComponentType, data = {}) {
        this[PrivateKeys.id] = id;
        this[PrivateKeys.type] = type;
        this[PrivateKeys.data] = data;
    }

    get id() {
        return this[PrivateKeys.id];
    }
    get type() {
        return this[PrivateKeys.type];
    }

    getAttributeKeys() {
        return Object.keys(this[PrivateKeys.data]);
    }
    getAttribute(key) {
        return this[PrivateKeys.data][key];
    }

    update(key: string, value: any): Component {
        return new Component(
            this[PrivateKeys.id],
            this[PrivateKeys.type],
            {
                ...this[PrivateKeys.data],
                [key]: value,
            },
        );
    }
}
