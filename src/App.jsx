import './App.scss';
import NavBar from './containers/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
