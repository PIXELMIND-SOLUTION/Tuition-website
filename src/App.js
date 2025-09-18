// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomeScreen/HomePage';
import { CourseDetails } from './DetailsPages/CourseDetail';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/course' element={<CourseDetails />} />
      </Routes>
    </>
  );
}

export default App;