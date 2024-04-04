import Card from './Card.jsx' ;
import Button from './Button.jsx';
import Student from './Student.jsx';
import List from './List.jsx';
import State from './State.jsx';
import Counter from './Counter.jsx';
import OnChange from './OnChange.jsx';
import ColorPicker from './ColorPicker.jsx';
import Car from './Car.jsx';
import Food from './Food.jsx';
import FavouriteCar from './FavouriteCar.jsx';
import ToDoList from './ToDoList.jsx';
import Clock from './Clock.jsx';

function App() {
  
  return (
    <>
    <Clock/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <br />
    <br/>
    <br/>
    <br/>
    <ToDoList/>
    <FavouriteCar/>
    <Food/>
    <Car/>
    <ColorPicker/>
    <OnChange/>
    <Counter/>
    <State/>
    <Card/>
    <Button/>
    <br />
    <List/>
    <Student name="Mehmet" age={20} isStudent={true} />
    <Student name="Itachi" age={19} isStudent={false} />
    <Student/>
    </>
    

  );
}

export default App
