import React from 'react';
import './App.css';
import './css/animate.css'
import './css/flexslider.css'
import './css/style.css'
import './fonts/icomoon/style.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#pb-navbar" data-offset="200">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
