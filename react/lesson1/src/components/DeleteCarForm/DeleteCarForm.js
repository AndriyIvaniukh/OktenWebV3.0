import React from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";

const DeleteCarForm = ({setDeletedCar}) => {

    const {register, reset, handleSubmit} = useForm();

    const submit = async (value) => {
        await carsService.deleteById(value.id);
        setDeletedCar(value.id);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>Delete Car:</div>
            <div><label> id: <input type="text" {...register('id', {valueAsNumber: true})}/></label></div>
            <button>Submit</button>
        </form>
    );
};

export {DeleteCarForm};