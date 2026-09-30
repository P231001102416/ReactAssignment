import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-portfolio">
      <Header />
      <main className="main-content">
        <AboutMe />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
