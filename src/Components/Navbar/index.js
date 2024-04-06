import React,{useState} from "react";
import "./navbar.css";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return(
        <div>
            <div className={`navbar desktop`}>
                <img src="logo_medify.png" alt="logo_medify"></img>
                <div className="navbar-list">
                    <div>Find Doctors</div>
                    <div>Hospitals</div>
                    <div>Medicines</div>
                    <div>Surgeries</div>
                    <div>Software for Provider</div>
                    <div>Facilities</div>
                    <button className="bookings-btn">My Bookings</button>
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
                <div>Find Doctors</div>
                <div>Hospitals</div>
                <div>Medicines</div>
                <div>Surgeries</div>
                <div>Software for Provider</div>
                <div>Facilities</div>
                <button className="bookings-btn">My Bookings</button>
            </div>
            }
        </div>
    )
}
export default Navbar;