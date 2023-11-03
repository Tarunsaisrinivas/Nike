import React from 'react';
import BasicExample from './Components/BasicExample';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basic-example" element={<BasicExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
