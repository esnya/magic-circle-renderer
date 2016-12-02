import React from 'react';
import * as Styles from '../styles/canvas.styl';
import Item from '../Item';
import BloomFilter from './BloomFilter';
import MagicCircleComponent from './MagicCircleComponent';
import MagicCircleDef from './MagicCircleDef';

export type PropTypes = {
    itemList: Array<Item>
};
const Canvas = (props: PropTypes) => {
    const {
        itemList,
    } = props;

    const defs = itemList.map(item => (
        <MagicCircleDef key={item.id} item={item} />
    ));
    const bloom = itemList.map(item => (
        <MagicCircleComponent key={item.id} item={item} />
    ));
    const foreground = itemList.map(item => (
        <MagicCircleComponent key={item.id} item={item} />
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
