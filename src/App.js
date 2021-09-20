// import './App.css';
import Hero from "./components/hero"
import Contact from "./components/contact"
//import Navbar from "./components/Navbar"
import Journey from './components/About/journey'
import Fencing from './components/About/fencing'
//import Travel from './components/About/travel/travel'
import Gameplan from './components/About/gameplan'

export default function App() {
  return(
    <>
      {/* <Navbar/> */}
      <Hero max="true"/>
      <Journey/>
      <Fencing/>
      {/* <Travel/> */}
      <Gameplan/>
      <Contact/>
    </>
    )
  }

