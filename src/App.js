import { useState } from 'react';
import './App.css';
import Frontpage from './front-page';
import About from './about';
import Tech from './tech';
import Projects from './projects'
import Contact from './contact';
import { Route, Routes } from 'react-router-dom';
import Thanks from './thanks';

function App() {
  const [isGerman, setIsGerman] = useState(false);
  let divStyle = {
    width: '100%',
    height: '100%',
  }

  let color = isGerman ? "rgb(221, 36, 36)" : 'rgba(0,0,0,.8)';
  let colorOp = isGerman ? 'rgba(0,0,0,.8)' : "rgb(221, 36, 36)";

  let navStyle = {
    position: 'sticky',
    backgroundColor: 'rgb(221, 36, 36)',
    color: 'rgba(0,0,0,.8)',
    padding: '10px',
    textAlign: 'left'
  }

  let aStyle = {
    color: 'inherit',
    textDecoration: 'none'
  }

  let buttonStyle = {
    color: colorOp,
    border: '1px solid ' + colorOp,
    backgroundColor: color,
    textDecoration: 'solid',
    margin: '0 auto'
  }

  return (
    <Routes>
      <Route 
      path="/"
      element={
      <div className="App d-flex flex-row" style={divStyle}>
        <nav className='d-flex flex-column' style={navStyle}>
          <a style={aStyle} href='#home'>Home</a>
          <a style={aStyle} href='#about'>{isGerman ? "über mich" : "about"}</a>
          <a style={aStyle} href='#technologies'>{isGerman ? "technologien" : "technologies"}</a>
          <a style={aStyle} href='#projects'>{isGerman ? "projekte" : "projects"}</a>
          <a style={aStyle} href='#contact'>{isGerman ? "kontakt" : "contact"}</a>
          <div style={{flex: '1'}}></div>
          <button className='btn' style={buttonStyle} onClick={() => setIsGerman(!isGerman)}>{isGerman ? "De" : "En"}</button>
        </nav>
        <div style={{overflowX: 'hidden', overflowY: 'auto', scrollBehavior: 'smooth'}}>
          <Frontpage isGerman={isGerman} />
          <About isGerman={isGerman} />
          <Tech isGerman={isGerman} />
          <Projects isGerman={isGerman} />
          <Contact isGerman={isGerman} />
        </div>
      </div>
      } />
      <Route path="/thanks" element={<Thanks isGerman={isGerman} />} />
    </Routes>
  );
}

export default App;
