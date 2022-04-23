
import './App.css';

import Main from './components/Profile';
import Navbar from './components/Navbar';
import Social_icons from './components/Social_icons';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume';

function App() {
  return (
    <>

      <Navbar />
      <About />
      <Skills />
      <Resume />
      <Contact />

    </>
  );
}

export default App;
