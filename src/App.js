// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomeScreen/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;