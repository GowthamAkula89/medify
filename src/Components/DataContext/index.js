import React, {useEffect, createContext, useState } from 'react';
import axios from "axios"
import { config } from '../../App';
// Create a context with default value
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [states,setStates] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            const stateResponse = await axios.get(`${config.endpoint}/states`)
            setStates(stateResponse.data);
        }
        fetchData()
    },[])
  return (
    <DataContext.Provider value={{ state, setState, city, setCity, states, bookingData, setBookingData}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;