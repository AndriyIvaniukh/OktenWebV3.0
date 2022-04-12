import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {carsService} from "../../services";
import {carValidator} from "../../validators";

const AddCarForm = ({setNewCar, carForUpdate, setUpdatedCar}) => {

    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });

    const submit = async (car) => {
        if (!carForUpdate) {
            const {data} = await carsService.create(car);
            setNewCar(data);
            reset();
        } else {
            setUpdatedCar({carForUpdate, car});
            await carsService.updateById(carForUpdate.id, car);
        }
    }

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>Add New Car</div>
            <div><label>Model:<input type="text" {...register('model')}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price:<input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year:<input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <button>Submit</button>
        </form>
    );
};

export {AddCarForm};