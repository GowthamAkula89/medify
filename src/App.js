import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import {DataProvider} from './Components/DataContext';
import HospitalsDetailsPage from './Pages/HospitalsDetialsPage';
import BookingsPage from './Pages/BookingsPage';
export const config = {
  endpoint: `https://meddata-backend.onrender.com`,
};
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/hospitals" element ={<HospitalsDetailsPage/>}/>
            <Route path="/bookings" element = {<BookingsPage/>}/>
          </Routes>
        </Router>
      </DataProvider>
      
    </div>
  );
}

export default App;
