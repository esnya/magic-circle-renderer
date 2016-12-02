import React from 'react';

const Filters = [
    20,
    10,
];

const GausianFilter = () => {
    const filters = Filters.map(filter => (
        <feGaussianBlur
            key={filter}
            stdDeviation={filter}
            result={`filter-${filter}`}
        />
    ));
    const mergeNodes = Filters.map(filter => (
        <feMergeNode
            key={filter}
            in={`filter-${filter}`}
        />
    ));

    return (
        <filter id="filter-bloom">
            {filters}
            <feMerge>
                {mergeNodes}
            </feMerge>
        </filter>
    );
};
export default GausianFilter;
