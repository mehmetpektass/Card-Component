import React, {useState} from "react";
import List from "./List";

function FavouriteCar(){

    const [cars , setCars] = useState([]);
    const [carYear , setCarYear] = useState(new Date().getFullYear());
    const [carMake , setCarMake] = useState("");
    const [carModel , setCarModel] = useState("");

    const handleAddCar = () =>{
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
                        }
        setCars(prevCar => ([...prevCar, newCar]))        
        
        setCarMake("")
        setCarModel("");
    }

    const handleChangeYear = (event) =>{
        setCarYear(event.target.value)
    }
    const handleChangeMake = (event) =>{
        setCarMake(event.target.value)
    }
    const handleChangeModel = (event) =>{
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List Of Cars</h2>
            <ul>
                {cars.map((car, index) =>
                <li key={index}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleChangeYear} /><br />
            <input type="text" value={carMake} onChange={handleChangeMake} /><br />
            <input type="text" value={carModel} onChange={handleChangeModel} /><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}
export default FavouriteCar