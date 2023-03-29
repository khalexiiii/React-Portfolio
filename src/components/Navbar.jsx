import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
  <header>
      <div className="navbar-mainheader">
        <div className="navigation-wrapper">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navigation-menu">
        <div className="navigation-wrapper">
        <i className="icon icon-divider"></i>
          <nav>
           <li><NavLink to="/" end>Home</NavLink></li>
           <li><NavLink to="/about" end>About Me</NavLink></li>
           <li><NavLink to="/projects" end>Projects</NavLink></li>
           <li><NavLink to="/contact" end>Contact</NavLink></li>
          </nav>
        <i className="icon icon-divider invert"></i>
        </div>
      </div>
      <div className="navbar-preheader">
        <div className="navigation-wrapper">
          
        </div>
      </div>
  </header>
  )
}

export default Navbar