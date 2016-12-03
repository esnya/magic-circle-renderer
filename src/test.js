import { generate } from 'shortid';
import store from './store';
import * as Actionsctions from './actions/Component';
import { ComponentTypes } from './models/Component';

let id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.CIRCLE));
store.dispatch(Actionsctions.update(id, 'radius', 0.8));

id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.CIRCLE));
store.dispatch(Actionsctions.update(id, 'radius', 0.65));

id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.CIRCLE));
store.dispatch(Actionsctions.update(id, 'radius', 0.325));

id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.PENTAGRAM));
store.dispatch(Actionsctions.update(id, 'radius', 0.65));
store.dispatch(Actionsctions.update(id, 'rotation', 20));

id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.PENTAGRAM));
store.dispatch(Actionsctions.update(id, 'radius', 0.325));
store.dispatch(Actionsctions.update(id, 'rotation', 20));
store.dispatch(Actionsctions.update(id, 'rotationDirection', 'reverse'));

id = generate();
store.dispatch(Actionsctions.create(id, ComponentTypes.CIRCLE_TEXT));
store.dispatch(Actionsctions.update(id, 'radius', 0.69));
store.dispatch(Actionsctions.update(id, 'fontSize', 25));
store.dispatch(Actionsctions.update(id, 'rotationDirection', 'reverse'));
store.dispatch(Actionsctions.update(id, 'text', [
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
    'ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ ᚺ ᛖ ᛚ ᛚ ᛟ ᚹ ᛟ ᚱ ᛚ ᛞ',
].join(' ')));
store.dispatch(Actionsctions.update(id, 'rotation', 40));
