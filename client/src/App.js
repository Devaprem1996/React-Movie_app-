import React from 'react'
import{BrowserRouter as Router , Routes,Route}from 'react-router-dom'

import Home from './pages/home';
import Uploads from './pages/uploads';
import Navbar from './Components/Navbar';





function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Uploads />} />
        <Route path='*' element={<h1>page not found</h1>} />
        
      </Routes>
    </Router>

  );
}

export default App;

