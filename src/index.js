import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Feedback from './component/feedback/feedback';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/:id/nutrition" element={<Feedback/>}/>
        <Route path="/:id/workout" element={<Feedback/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

