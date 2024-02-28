import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import your Redux store
import Home from './pages/Home/Home';
import Yoga from './pages/Yoga/Yoga';
import About from './pages/About/About';
import Tutorials from './pages/Tutorials/Tutorials';
import Signin from './pages/Sign In/Signin';
import Signup from './pages/Sign Up/Signup';
import './App.css';
import { selectUsers } from './store/usersSlice';
import { useSelector } from 'react-redux';

export default function App() {
  // const user= useSelector(selectUsers);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<Yoga />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
      </Routes>
    </Router>
  );
}

