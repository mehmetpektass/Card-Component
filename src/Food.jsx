import { useState } from "react";


function Food(){

const [foods, setFoods] = useState(["banana", "apple", "orange"])

const handleAddFoods = () =>{
    const addingNewFood = document.getElementById("addingFood").value;
    document.getElementById("addingFood").value = "";
    setFoods(prevFood => ([...prevFood, addingNewFood]))
}
const handleRemoveFoods = () =>{
    const removingNewFood = document.getElementById("removingFood").value;
    document.getElementById("removingFood").value = "";
    setFoods(prevFood => (prevFood.filter(food => food !== removingNewFood)))
}

    return(
        <div>
            <h2>Foods List</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food}</li> )}
            </ul>
            <input id="addingFood" type="text" placeholder="Enter a food name" />
            <button onClick={handleAddFoods}>Add Food</button><br />
            <input id="removingFood" type="text" placeholder="Enter a food name" />
            <button onClick={handleRemoveFoods}>Remove Food</button>
        </div>
    );
}
export default Food