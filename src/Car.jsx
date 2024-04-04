import React, {useState} from "react";

function Car(){

    const [car , setCar] = useState({year:2024, make:" Porsche ", model:"GT3RS"})

    const handleChangeYear = (event) =>{
        setCar(prevCar => ({...prevCar , year: event.target.value}))
    }
    const handleChangeMake = (event)=>{
        setCar(prevCar => ({...prevCar, make:event.target.value }))
    }
    const handleChangeModel = (event) =>{
        setCar(prevCar =>({...prevCar, model:event.target.value}))
    }

    return(
        <div>
            <p>Your Favourite Car is: {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={handleChangeYear} /><br />
            <input type="text" value={car.make} onChange={handleChangeMake} /><br />
            <input type="text" value={car.model} onChange={handleChangeModel} />
        </div>
    );
}
export default Car