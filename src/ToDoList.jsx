import React, {useState} from "react"

function ToDoList(){

    const [tasks , setTasks] = useState(["Eat Breakfast" , "Drink Some Water" , "Hit The Gym"]);
    const [newTask , setNewTask] = useState("");
    

    const handleInputChange = (event) =>{
        setNewTask(event.target.value);
    }
    const addTask = () =>{

        if (newTask.trim() !== "") {
            setTasks(prevTask => ([...prevTask , newTask]))
            setNewTask("");
        }
    }
    const deleteTask = (index) =>{
        const filteredTasks = tasks.filter((_ , i) => i !== index);
        setTasks(filteredTasks);
    }
    const moveTaskUp = (index) =>{
        if (index > 0 ) {
            const switchedTasks = [...tasks];
            [switchedTasks[index], switchedTasks[index-1]] =
            [switchedTasks[index-1], switchedTasks[index]];
            setTasks(switchedTasks);  
        }
    }
    const moveTaskDown = (index) =>{
        if(index < tasks.length -1){
            const switchedTasks = [...tasks];
            [switchedTasks[index], switchedTasks[index+1]] =
            [switchedTasks[index+1], switchedTasks[index]];
            setTasks(switchedTasks);
        }
        
    }

    return(
        <div className="to-do-list-container">
            <h1 className="title-toDoList">To-Do-List</h1>
            <div>
                <input className="task-input" type="text" value={newTask} placeholder="Enter a Task" onChange={handleInputChange} />
                <button className="add-button" onClick={addTask} >Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li className="list-toDoList" key={index}>
                        <span className="task-list" >{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)} >Delete </button>
                        <button className="up-button" onClick={() => moveTaskUp(index)} >👆</button>
                        <button className="down-button" onClick={() => moveTaskDown(index)} >👇</button>
                    </li>)}
            </ol>
        </div>
    );
} 
export default ToDoList