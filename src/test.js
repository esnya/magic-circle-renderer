import { generate } from 'shortid';
import store from './store';
import * as ItemActions from './actions/item';
import { ItemTypes } from './Item';

let id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.CIRCLE));
store.dispatch(ItemActions.update(id, 'radius', 0.8));

id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.CIRCLE));
store.dispatch(ItemActions.update(id, 'radius', 0.65));

id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.CIRCLE));
store.dispatch(ItemActions.update(id, 'radius', 0.325));

id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.PENTAGRAM));
store.dispatch(ItemActions.update(id, 'radius', 0.65));
store.dispatch(ItemActions.update(id, 'rotation', 20));

id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.PENTAGRAM));
store.dispatch(ItemActions.update(id, 'radius', 0.325));
store.dispatch(ItemActions.update(id, 'rotation', 20));
store.dispatch(ItemActions.update(id, 'rotationDirection', 'reverse'));

id = generate();
store.dispatch(ItemActions.create(id, ItemTypes.CIRCLE_TEXT));
store.dispatch(ItemActions.update(id, 'radius', 0.69));
store.dispatch(ItemActions.update(id, 'fontSize', 25));
store.dispatch(ItemActions.update(id, 'rotationDirection', 'reverse'));
store.dispatch(ItemActions.update(id, 'text', [
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
].join(' ')));
store.dispatch(ItemActions.update(id, 'rotation', 40));
