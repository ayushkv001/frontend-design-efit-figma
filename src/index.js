import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import FeedbackWorkout from './component/feedback/feedbackworkout';
import FeedbackNutrition from './component/feedback/feedbacknutrition';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/:id/nutrition" element={<FeedbackNutrition/>}/>
        <Route path="/:id/workout" element={<FeedbackWorkout/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

