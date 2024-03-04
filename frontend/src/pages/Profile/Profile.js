import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../Firebase/firebase-config'; // Assuming your Firestore instance is named 'firestore'
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/usersSlice';
import Signup from '../Sign Up/Signup';

export default function Profile() {
  const { email } = useParams();
  const [userData, setUserData] = useState(null);
  const [poseData, setPoseData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = collection(firestore, 'Users');
        const q = query(userRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUserData(doc.data());
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  useEffect(() => {
    const fetchPoseData = async () => {
      try {
        const posesRef = collection(firestore, 'Poses');
        const q = query(posesRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setPoseData(doc.data());
          console.log('Pose Data:', doc.data());
        });
      } catch (error) {
        console.error('Error fetching pose data:', error);
      }
    };

    if (email) {
      fetchPoseData();
    }
  }, [email]);

  const user = useSelector(selectUsers);

  return (
    <div className="profile-container black-background">


    <div className="profile-container">
      <div className="header">
        <h2>{userData ? `${userData.firstName}'s Profile` : 'Loading...'}</h2>
      </div>
      <div className="user-info">
        {userData && (
          <div className="user-card">

            <h3>User Information</h3>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Birthdate:</strong> {userData.birthDate}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
          </div>
        )}
      </div>
  
      <div className="pose-info">
  <h3>Pose Best Time</h3>
  {poseData && (
    <div className="pose-cards">
      {Object.keys(poseData).map((poseName, index) => {
        // Check if the field key is not the 12th field's key
        if (poseName !== 'email') {
          return (
            <div key={index} className="pose-card">
              <h4>{poseName}</h4>
              <p><strong>Best Time:</strong> {poseData[poseName]}</p>
            </div>
          );
        }
        return null; // Exclude rendering for the 12th field
      })}
    </div>
  )}
</div>
      <div className="signup-section">
        {!user.currentUser && (
          <div className="signup-message">
            <p>Please sign up first.</p>
            <Signup />
          </div>
        )}
      </div>
    </div>

    </div>
  );
}
