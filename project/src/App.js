import logo from './logo.svg';
import './App.css';
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>This button switches between table view and form view</button>
        <TableComponent />
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
