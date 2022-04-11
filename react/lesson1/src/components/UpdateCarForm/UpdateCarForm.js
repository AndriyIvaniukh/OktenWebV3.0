import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";

const UpdateCarForm = ({setUpdatedCar}) => {

    const {register, reset, handleSubmit} = useForm();

    const submit = async (value) => {
        const newCar = {model: value.model, price: value.price, year: value.year};
        await carsService.updateById(value.id, newCar);
        setUpdatedCar({id: value.id, car: newCar});
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>Update Car</div>
            <div><label>id: <input type="text" {...register('id', {valueAsNumber: true})}/></label></div>
            <div><label>model: <input type="text" {...register('model')}/></label></div>
            <div><label>price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>Update</button>
        </form>
    );
};

export {UpdateCarForm};