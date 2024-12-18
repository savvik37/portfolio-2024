import './App.css';
import MainComponent from './mainComponent';
import Nav from './nav';
import {React, useState} from 'react';


function App() {

  const [mainBoo, setMainBoo] = useState(true);
  const [projectsBoo, setProjectsBoo] = useState(false);
  const [aboutBoo, setAboutBoo] = useState(false);

  return (
    <div className="App">
      <Nav/>
      <MainComponent/>
    </div>
  );
}

export default App;
