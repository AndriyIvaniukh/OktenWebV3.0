import React from 'react';

const Car = ({car, setDeletedCar, setCarForUpdate}) => {
    const {id,model,year,price} = car;

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
            <button onClick={()=>setDeletedCar(id)}>Delete</button>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <br/>
        </div>
    );
};

export {Car};