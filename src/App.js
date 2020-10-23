import React from 'react';
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main';
import Playground from './Components/Playground';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App container">
      <Header />
      <Main />
      {/* <div className="wrapper">
      <Sidebar />
      </div> */}
    </div>
  );
}

export default App;
