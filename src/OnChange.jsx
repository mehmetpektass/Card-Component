import React, {useState} from "react";

function OnChange(){

    const [name , setName] = useState("Guest");
    const [shipping , setShipping] = useState("Delivery");

    const handleChangeName = (e) =>{
        setName(e.target.value)
    }

    const handleShippingChange = (e) =>{
        setShipping(e.target.value)
    }


    return(
        <div>
            <input type="text" value={name} onChange={handleChangeName} />
            <p>Name: {name}</p>

            <label>
                 <input type="radio" value={"Pick Up"} checked={shipping === "Pick Up"} onChange={handleShippingChange} />
            Pick Up
            </label>
            <br />
            <label>
                 <input type="radio" value={"Delivery"} checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>

      
    );
}
export default OnChange