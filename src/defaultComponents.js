import { generate } from 'shortid';
import store from './store';
import * as CActions from './actions/Component';
import { ComponentTypes } from './models/Component';

let id = generate();
store.dispatch(CActions.create(id, ComponentTypes.CIRCLE));
store.dispatch(CActions.update(id, 'radius', 0.8));

id = generate();
store.dispatch(CActions.create(id, ComponentTypes.CIRCLE));
store.dispatch(CActions.update(id, 'radius', 0.65));

id = generate();
store.dispatch(CActions.create(id, ComponentTypes.CIRCLE));
store.dispatch(CActions.update(id, 'radius', 0.325));

id = generate();
store.dispatch(CActions.create(id, ComponentTypes.HEXAGRAM));
store.dispatch(CActions.update(id, 'radius', 0.65));
store.dispatch(CActions.update(id, 'rotation', 20));

id = generate();
store.dispatch(CActions.create(id, ComponentTypes.HEXAGRAM));
store.dispatch(CActions.update(id, 'radius', 0.325));
store.dispatch(CActions.update(id, 'rotation', 20));
store.dispatch(CActions.update(id, 'rotationDirection', 'reverse'));

id = generate();
store.dispatch(CActions.create(id, ComponentTypes.CIRCLE_TEXT));
store.dispatch(CActions.update(id, 'radius', 0.69));
store.dispatch(CActions.update(id, 'fontSize', 23));
store.dispatch(CActions.update(id, 'rotationDirection', 'reverse'));
store.dispatch(CActions.update(id, 'text', [
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
].join(' ')));
store.dispatch(CActions.update(id, 'rotation', 40));
