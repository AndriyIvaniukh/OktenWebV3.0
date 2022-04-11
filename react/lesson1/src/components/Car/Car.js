import React from 'react';

const Car = ({car}) => {
    const {id,model,year,price} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
        </div>
    );
};

export {Car};