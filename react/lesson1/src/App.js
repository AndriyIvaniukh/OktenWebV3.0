import {AddCarForm, Cars, DeleteCarForm, UpdateCarForm} from "./components";
import {useState} from "react";

import css from "./App.module.css";


function App() {

    const [newCar, setNewCar] = useState(null);
    const [deletedCar, setDeletedCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null)

    return (
        <div>
            <div className={css.dFlexRow}>
                <AddCarForm setNewCar={setNewCar}/>
                <DeleteCarForm setDeletedCar={setDeletedCar}/>
                <UpdateCarForm setUpdatedCar={setUpdatedCar}/>
            </div>
            <hr/>
            <Cars newCar={newCar} deletedCar={deletedCar} updatedCar={updatedCar}/>
        </div>
    );
}

export default App;
