import './App.css';
import Header from './components/Header';
import YourExerciseConainer from './container/YourExerciseConainer';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <Header />
      <YourExerciseConainer />
      <UserForm />
    </div>
  );
}

export default App;
