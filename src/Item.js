export type ItemType = string;

export const ItemTypes = {
    CIRCLE: ('ITEM_TYPE_CIRCLE' : ItemType),
    CIRCLE_TEXT: ('ITEM_TYPE_CIRCLE_TEXT' : ItemType),
    PENTAGRAM: ('ITEM_TYPE_PENTAGRAM' : ItemType),
};

const PrivateKeys = {
    id: Symbol('id'),
    type: Symbol('type'),
    data: Symbol('data'),
};

export default class Item {
    constructor(id: string, type: ItemType, data = {}) {
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

    update(key: string, value: any): Item {
        return new Item(
            this[PrivateKeys.id],
            this[PrivateKeys.type],
            {
                ...this[PrivateKeys.data],
                [key]: value,
            },
        );
    }
}
