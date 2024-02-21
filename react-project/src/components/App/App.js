import logo from '../../graphics/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="h1-fio">Обвінцев Сергій Васильович</h1>
        <img src="./foto.png" alt="foto"/>
      </header>
    </div>
  );
}

export default App;
