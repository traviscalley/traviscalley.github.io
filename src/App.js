import React from 'react';
import travis from './images/portfolio-pic.jpeg';
import './App.css'

function MainBody() {
  return (
    <div className="Main">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna 
         aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
         ullamco laboris nisi ut aliquip ex ea commodo consequat. 
         Duis aute irure dolor in reprehenderit in voluptate velit 
         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
         occaecat cupidatat non proident, sunt in culpa qui officia 
         deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img className="Headshot" 
           src={travis}
           alt="Travis Calley professional headshot"/>
      <MainBody />
    </div>
   
  );
}

export default App;
