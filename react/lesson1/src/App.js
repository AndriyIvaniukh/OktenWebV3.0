import {AddCarForm, Cars} from "./components";
import {useState} from "react";


function App() {

    const [newCar, setNewCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <AddCarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
        </div>
    );
}

export default App;
