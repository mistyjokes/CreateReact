import logo from './Rene.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Rene and I'm going to master React!.
        </p>
        <a
          className="App-link"
          href="https://github.com/mistyjokes/CreateReact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
