import React, {useEffect, useState} from 'react';
import {carsService} from "../../services";
import {Car} from "../Car/Car";

const Cars = ({newCar, setCarForUpdate, updatedCar}) => {

    const [cars, setCars] = useState([]);
    const [deletedCar, setDeletedCar] = useState(null);

    useEffect(() => {
        carsService.getAll().then(value => setCars(value.data));
    }, [])

    useEffect(() => {
        if (newCar) {
            setCars(prevState => [...prevState, newCar]);
        }
    }, [newCar])

    useEffect(() => {
        if (deletedCar) {
            carsService.deleteById(deletedCar);
            setCars(prevState => prevState.filter(car => car.id !== deletedCar));
        }
    }, [deletedCar])

    useEffect(() => {
        if (updatedCar) {
            setCars(prevState => [...prevState.filter(value => value.id !== updatedCar.carForUpdate.id),
                {
                    id: updatedCar.carForUpdate.id, model: updatedCar.car.model, price: updatedCar.car.price,
                    year: updatedCar.car.year
                }]);
        }
    }, [updatedCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setDeletedCar={setDeletedCar}
                                  setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};