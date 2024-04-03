import Card from './Card.jsx' ;
import Button from './Button.jsx';
import Student from './Student.jsx';
import List from './List.jsx';
import State from './State.jsx';

function App() {
  
  return (
    <>
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
