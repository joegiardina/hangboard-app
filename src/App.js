import './App.css';
import Header from './components/Header';
import HeaderBar from './components/HeaderBar';
import Router from './Router';

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
      </Router>
    </>
  );
}

export default App;
