import React from 'react';
import './App.css';
import CookieClicker from './components/CookieClicker/CookieClicker';
import CatFacts from './components/CatFacts/CatFacts';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookiecatlist</h1>
      </header>
      <main>
        <CookieClicker />
        <CatFacts />
        <Users />
      </main>
    </div>
  );
}

export default App;