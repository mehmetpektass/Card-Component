import React , {UseState, useState} from "react";

function State(){

    let [name, setName] = useState();
    const updateName = ()=>{
        setName("Mehmet");
        console.log(name);
    }

    return(
        <div>
           
            <button onClick={updateName}>Update Name</button>
            <p>Name: {name}</p>
        </div>
    );
}
export default State