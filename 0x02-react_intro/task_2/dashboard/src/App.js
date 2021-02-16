import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        {/* https://reactjs.org/docs/dom-elements.html */}
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="psw">Password: </label>
        <input type="password" id="psw" />
        <button>OK</button>
      </body>
      <footer className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {/* <p>{`Copyright ${getFullYear()} - ${getFooterCopy(true)}`}</p> */}
      </footer>
    </div>
  );
}

export default App;
