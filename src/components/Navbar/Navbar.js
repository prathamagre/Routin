import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
        <h1>Movies HUB🎬📽️</h1>

        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>

            <Link to="/about" className="navbar-link">About</Link>
            
            <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar