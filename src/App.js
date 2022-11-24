import './App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Skill from './components/Skill';
import Job from './components/Job';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <About />
      <Skill />
      <Job />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
