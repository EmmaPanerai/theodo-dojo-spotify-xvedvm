import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test </h1>
      </header>
      <div className="App-images">
        <p>Tente de deviner le plus possible de musique ! À toi de jouer !</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
