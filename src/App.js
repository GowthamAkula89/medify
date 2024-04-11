import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import {DataProvider} from './Components/DataContext';
import HospitalsDetailsPage from './Pages/HospitalsDetialsPage';
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
          </Routes>
        </Router>
      </DataProvider>
      
    </div>
  );
}

export default App;
