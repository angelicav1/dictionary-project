import logo from "./logo.png"
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header className='App-header'>
          <img src={logo} className='App-logo img-fluid' alt='logo' />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className='App-footer'>
          
          <small>Coded by <a href="https://wildbyte.org/" target="_blank" rel="noreferrer">Wild Byte</a>
          , open-source on <a href="https://github.com/angelicav1/dictionary-project" target="_blank" rel="noreferrer">Github</a>
          , and hosted on <a href="https://cheery-sprinkles-9d1168.netlify.app/" target="_blank" rel="noreferrer">Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}

