import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import "./search.css";
import {config} from "../../App"
import DataContext from '../DataContext';
const Search = () => {
    const {setCity, setState, states} = useContext(DataContext);
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [cities, setCities] = useState([]);
    const handleState = (e) =>{
        e.preventDefault();
        setSelectedState(e.target.value);
    }
    const handleCity = (e) => {
        e.preventDefault();
        setSelectedCity(e.target.value);
    }
    useEffect(()=>{
        const fetchData = async() =>{
            if(selectedState !== ""){
                try{
                    const citiesRes = await axios.get(`${config.endpoint}/cities/${selectedState}`);
                    setCities(citiesRes.data);
                }catch(err){
                    console.log("Error in fetching data", err);
                }
            }
        }
        fetchData()
    },[selectedState])
    const handleSearch = () => {
        setCity(selectedCity);
        setState(selectedState)
    }
    return(
        <div className="search-section">
            <div className="input-field">
                <img className="location-marker" src="location_marker.png" alt="location-maker"></img>
                <input list="browsers-states-list" className="input-value" type="text" placeholder="State" onChange={handleState}/>
                <datalist id="browsers-states-list">
                    {states.map((state,index)=>
                        <option key={index+"a"} value={state}></option>
                    )}
                </datalist>
            </div>
            <div className="input-field">
                <img className="location-marker" src="location_marker.png" alt="location-maker"></img>
                <input list="browsers-cities-list" className="input-value" type="text" placeholder="City" onChange={handleCity}/>
                <datalist id="browsers-cities-list">
                    {cities && cities.map((city,index)=>
                        <option key={index+"b"} value={city}></option>
                    )}
                </datalist>
            </div>

            <div className="search-btn" onClick={handleSearch}>
                <img src="searchIcon.png" alt="searchIcon"/>
                <span>Search</span>
            </div>

        </div>
    )
}
export default Search;