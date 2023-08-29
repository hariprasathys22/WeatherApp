
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Weather />
    </div>
  );
}

export default App;
