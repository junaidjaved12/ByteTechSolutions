import React from 'react';
import './App.css';
import Counter from './Counter';

import MUIList from './MUIList';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <>
   
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Counter/>}></Route>
    <Route path='/fetchapi' element={<MUIList/>}></Route>
   </Routes>
   </BrowserRouter>
   

      
      
       
        
      

      
  
    </>
  );
}

export default App;
