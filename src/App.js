import React from 'react';
import travis from './images/portfolio-pic.jpeg';
import './App.css'

function MainBody() {
  return (
    <div className="Main">
      <p>I am a recent graduate from the University of New Hampshire.
         During my time at the university I have achieved three deans 
         lists awards, two high honors and one honors, and a GPA of 3.25
         in Computer Science. I am passionate about software engineering 
         and I am currently seeking an entry level position. 
      </p>
    </div>
  );
}

function Menu() {
  return (
    <ul className="Menu">
      <li><h3>Travis G. Calley</h3></li>
      <li><a href="https://www.linkedin.com/in/travis-calley/">LinkedIn Link</a></li>
      <li><button>About Me</button></li>
      <li><button>Resume</button></li>
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <img className="Headshot" 
           src={travis}
           alt="Travis Calley professional headshot"/>
      <MainBody /> */}
    </div>
   
  );
}

export default App;
