import React from 'react';
import * as Styles from '../styles/canvas.styl';
import Component from '../models/Component';
import BloomFilter from './BloomFilter';
import MagicCircleComponent from './MagicCircleComponent';
import MagicCircleDef from './MagicCircleDef';

export type PropTypes = {
    componentList: Array<Component>
};
const Canvas = (props: PropTypes) => {
    const {
        componentList,
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

    return (
        <svg width={512} height={512}>
            <BloomFilter />
            <defs>{defs}</defs>
            <g className={Styles.outerContainer}>
                <rect className={Styles.background} width={512} height={512} />
                <g className={Styles.innerContainer}>
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
