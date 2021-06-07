import './App.css';
import Header from './components/Header'
import YourExerciseConainer from './container/YourExerciseConainer'
import UserForm from './components/UserForm'
import { useState } from 'react'


function App() {
  const [Routine, setRoutine] = useState([])
  return (
    <div className="App">
      <Header />
      <YourExerciseConainer />
      <UserForm />
    </div>
  );
}

export default App;
