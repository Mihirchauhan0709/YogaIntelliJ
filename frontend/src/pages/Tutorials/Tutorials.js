import React from 'react';
import './Tutorials.css';
import { tutorials, fixCamera } from '../../utils/data';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/usersSlice';
import Signup from '../Sign Up/Signup';

export default function Tutorials() {
    const user = useSelector(selectUsers);

    if (user.currentUser) {
        return (
            <div className="tutorials-container">
                <h1 className="tutorials-heading">Get Started with Yoga</h1>
                <div className="tutorials-content-container">
                    {tutorials.map((tutorial, index) => (
                        <p key={index} className="tutorials-content">{tutorial}</p>
                    ))}
                </div>
                <h1 className="tutorials-heading">Having Trouble with Your Camera?</h1>
                <div className="tutorials-content-container">
                    {fixCamera.map((points, index) => (
                        <p key={index} className="tutorials-content">{points}</p>
                    ))}
                </div>
                {/* Additional tutorial points */}
                <h1 className="tutorials-heading">Unlock More Benefits</h1>
                <div className="tutorials-content-container">
                    <p className="tutorials-content">🌟 Join our community by signing up for an account and unlock exclusive content!</p>
                    <p className="tutorials-content">🔐 Sign in to access personalized features and track your progress seamlessly.</p>
                    <p className="tutorials-content">🕒 Discover the best times for poses in your profile page to optimize your practice.</p>
                    {/* Add more tutorial points as needed */}
                </div>
            </div>
        );
    } else {
        window.alert("Please SignUP first");
        return <Signup />;
    }
}
