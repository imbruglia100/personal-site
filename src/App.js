import {NavBar} from './components/Navbar/Navbar'
import {Banner} from './components/Banner/Banner'
import {Skills} from './components/Skills/Skills'
import {Projects} from './components/Projects/Projects'
import {Contact} from './components/Contact/Contact'
import {Footer} from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
