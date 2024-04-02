import Card from './Card.jsx' ;
import Button from './Button.jsx';
import Student from './Student.jsx';
import List from './List.jsx';

function App() {
  
  return (
    <>
    <Card/>
    <Button/>
    <br />
    <List/>
    <Student name="Mehmet" age={20} isStudent={true} />
    <Student name="Itachi" age={19} isStudent={false} />
    <Student name="Sam" age={34} isStudent={true} />
    <Student/>
    </>
    

  );
}

export default App
