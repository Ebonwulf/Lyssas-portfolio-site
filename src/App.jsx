import './App.scss';
import NavBar from './containers/navbar/NavBar';
import Home from './components/home/Home';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Home />
    </div>
  );
}

export default App;
