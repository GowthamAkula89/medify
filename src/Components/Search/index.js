import React from "react";
import "./search.css";
const Search = () => {
    return(
        <div className="search-section">
            <div className="input-field">
                <img className="location-marker" src="location_marker.png" alt="location-maker"></img>
                <input className="input-value" type="text" placeholder="Search"/>
            </div>
            <div className="input-field">
                <img className="location-marker" src="location_marker.png" alt="location-maker"></img>
                <input className="input-value" type="text" placeholder="Search"/>
            </div>
            <div className="search-btn">
                <img src="searchIcon.png" alt="searchIcon"/>
                <span>Search</span>
            </div>
        </div>
    )
}
export default Search;