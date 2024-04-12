import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <div>
            <div className={`navbar desktop`}>
                <Link to="/"  className="navbar-item">
                    <img src="logo_medify.png" alt="logo_medify"></img>
                </Link>
                <div className="navbar-list">
                    <Link to="/hospitals" className="navbar-item">Find Doctors</Link>
                    <Link to="/hospitals" className="navbar-item">Hospitals</Link>
                    <Link to="/hospitals" className="navbar-item">Medicines</Link>
                    <Link to="/hospitals" className="navbar-item">Surgeries</Link>
                    <Link to="/hospitals" className="navbar-item">Software for Provider</Link>
                    <Link to="/hospitals" className="navbar-item">Facilities</Link>
                    <Link to="/bookings" className="navbar-item">
                        <button className="bookings-btn">My Bookings</button>
                    </Link>
                    
                </div>
            </div>
            <div className={`navbar mobile`}>
                <img src="logo_medify.png" alt="logo_medify" />
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {menuOpen && 
            <div className={`navbar-list ${menuOpen ? 'open' : ''}`}>
                <Link to="/hospitals" className="navbar-item">Find Doctors</Link>
                    <Link to="/hospitals" className="navbar-item">Hospitals</Link>
                    <Link to="/hospitals" className="navbar-item">Medicines</Link>
                    <Link to="/hospitals" className="navbar-item">Surgeries</Link>
                    <Link to="/hospitals" className="navbar-item">Software for Provider</Link>
                    <Link to="/hospitals" className="navbar-item">Facilities</Link>
                    <Link to="/bookings" className="navbar-item">
                        <button className="bookings-btn">My Bookings</button>
                    </Link>
            </div>
            }
        </div>
    )
}
export default Navbar;