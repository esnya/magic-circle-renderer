const PrivateKeys = {
    angle: Symbol('angle'),
    perspective: Symbol('perspective'),
};

export default class ViewAttributes {
    constructor(angle: number = 0, perspective: number = 100) {
        this[PrivateKeys.angle] = angle;
        this[PrivateKeys.perspective] = perspective;
    }

    get angle() {
        return this[PrivateKeys.angle];
    }
    get perspective() {
        return this[PrivateKeys.perspective];
    }

    updateAngle(angle: number) {
        return new ViewAttributes(angle, this.perspective);
    }
    updatePerspective(perspective: number) {
        return new ViewAttributes(this.angle, perspective);
    }
}
