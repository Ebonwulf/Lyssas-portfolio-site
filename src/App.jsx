import './App.scss';
import NavBar from './containers/navbar/NavBar';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <Home />
    </div>
  );
}

export default App;
