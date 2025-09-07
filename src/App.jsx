import LandingPage from "./Pages/LandingPage"
import Portfolio from "./Pages/Portfolio"
import ProjectsPage from "./Pages/ProjectPage"
import ContactPage from "./Pages/ContactPage"
import AboutPage from "./Pages/AboutPage"
import { HashRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import ResumePage from "./Pages/ResumePage"

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<div><Navbar/><LandingPage/></div>}/>
        <Route path="/projects" element={<div><Navbar/><ProjectsPage/></div>}/>
        <Route path="/contact" element={<div><Navbar/><ContactPage/></div>}/>
        <Route path="/about" element={<div><Navbar/><AboutPage/></div>}/>
        <Route path="/resume" element={<div><Navbar/><ResumePage/></div>}/>
      </Routes>
    </Router>
  )
}

export default App
