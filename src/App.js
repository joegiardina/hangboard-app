import './App.css';
import Header from './components/Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
