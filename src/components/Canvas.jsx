import React from 'react';
import * as Styles from '../styles/canvas.styl';
import Component from '../models/Component';
import BloomFilter from './BloomFilter';
import MagicCircleComponent from './MagicCircleComponent';
import MagicCircleDef from './MagicCircleDef';

export type PropTypes = {
    componentList: Array<Component>,
    angle: ?number,
    perspective: ?number,
};
const Canvas = (props: PropTypes) => {
    const {
        componentList,
        angle,
        perspective,
    } = props;

    const defs = componentList.map(component => (
        <MagicCircleDef key={component.id} component={component} />
    ));
    const bloom = componentList.map(component => (
        <MagicCircleComponent key={component.id} component={component} />
    ));
    const foreground = componentList.map(component => (
        <MagicCircleComponent key={component.id} component={component} />
    ));

    const outerStyle = {
        perspective: perspective ? `${perspective}cm` : null,
    };
    const innerStyle = {
        transform: angle ? `rotateX(${angle}deg)` : null,
    };

    return (
        <svg width={512} height={512}>
            <BloomFilter />
            <defs>{defs}</defs>
            <g className={Styles.outerContainer} style={outerStyle}>
                <rect className={Styles.background} width={512} height={512} />
                <g className={Styles.innerContainer} style={innerStyle}>
                    <g className={Styles.bloom}>
                        {bloom}
                    </g>
                    <g className={Styles.foreground}>
                        {foreground}
                    </g>
                </g>
            </g>
        </svg>
    );
};
export default Canvas;
