import logo from './logo.svg';
import './App.css';
import ContainerComponent from './ContainerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContainerComponent />
      </header>
    </div>
  );
}

export default App;
