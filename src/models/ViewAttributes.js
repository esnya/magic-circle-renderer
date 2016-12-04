const PrivateKeys = {
    angle: Symbol('angle'),
    perspective: Symbol('perspective'),
    scale: Symbol('scale'),
};

export default class ViewAttributes {
    constructor(angle: number = 0, perspective: number = 100, scale = 1.0) {
        this[PrivateKeys.angle] = angle;
        this[PrivateKeys.perspective] = perspective;
        this[PrivateKeys.scale] = scale;
    }

    get angle() {
        return this[PrivateKeys.angle];
    }
    get perspective() {
        return this[PrivateKeys.perspective];
    }
    get scale() {
        return this[PrivateKeys.scale];
    }

    updateAngle(angle: number) {
        return new ViewAttributes(angle, this.perspective, this.scale);
    }
    updatePerspective(perspective: number) {
        return new ViewAttributes(this.angle, perspective, this.scale);
    }
    updateScale(scale: number) {
        return new ViewAttributes(this.angle, this.perspective, scale);
    }
}
