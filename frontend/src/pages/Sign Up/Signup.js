import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import { auth } from '../../Firebase/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth';
// import {useDispatch} from 'react-redux';
// import {setUser} from "../../store/usersSlice"


export default function Signup() {

  // const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
  //   if(user){
  //     const uid = user.uid;
  //     dispatch(setUser({id: user.uid, email: user.email}))
  //   }
  //   else{
  //     dispatch(setUser(null))
  //   }
  // })

  function handleCredentials(e){
    
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value });
  }

  function handleSignUp(e){

    e.preventDefault();
    setError("")

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password )
    .then((userCredentials) => {
      // dispatch(setUser({id: userCredentials.user.uid, email: userCredentials.user.email}))
      navigate("/signin", { replace: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(error.message);
    })
  }

    return (
      <div className="signup-container">
        <main className="signup-main">
          <section className="signup-section">
            <div className="signup-header">
              <h1 className="signup-heading">Welcome</h1>
            </div>
            <div className="signup-form-wrapper">
              <form className="signup-form">
                <div className="signup-form-group">
                  <label htmlFor="email" className="signup-label">Email <span className="required">*</span></label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    // value={email}
                    onChange={(e) => {handleCredentials(e)}}
                    className="signup-input"
                    name='email'
                    required
                  />
                </div>
                <div className="signup-form-group">
                  <label htmlFor="password" className="signup-label">Password <span className="required">*</span></label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    // value={password}
                    className="signup-input"
                    onChange={(e) => {handleCredentials(e)}}
                    name='password'
                    required
                  />
                </div>
                <div className="signup-form-group">
                  <button onClick={(e) => {handleSignUp(e)}}type="submit" className="signup-btn">Sign up</button>
                </div>

                {
                  error && 
                  <div className='error'>
                    {error}
                  </div>
                }
              </form>
              <div className="signup-footer">
                <p className="signup-footer-text">Already have an account? <Link to="/signin" className="signup-footer-link">Sign in</Link></p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}
