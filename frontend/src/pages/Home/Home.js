import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faFrown,faSurprise } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/usersSlice';
import Signup from '../Sign Up/Signup';
import Profile from '../Profile/Profile';
import { auth } from '../../Firebase/firebase-config';
import { signOut } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/usersSlice';
import Modal from 'react-modal';

const KeyFeatureCard = ({ title, description }) => {
    return (
        <div className="key-feature-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  Modal.setAppElement('#root'); 

export default function Home() {
    const dispatch = useDispatch();
    // function handleSignOut(){
    //     if(window.confirm('Are you sure you want to log out?')){

    //         signOut(auth)
    //     .then(() => {
    //         dispatch(setUser(null))
    //     })
    //     .catch((error)=> {
    //         console.log(error);
    //     })
    //     }
    //     else{

    //     }
        
    // }
    const [showModal, setShowModal] = useState(false);

    function handleSignOut() {
        setShowModal(true);
    }

    function confirmSignOut() {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
                setShowModal(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const user = useSelector(selectUsers);
    
    if (user.currentUser) {
        console.log(user.currentUser.email);
        // User is signed up or logged in, show the Home content
        return (
            <div className='home-container'>
                <div className='home-header'>
                    <h1 className='home-heading'>YogaIntelliJ</h1>
                                        
                    <Link to={`/profile/${user.currentUser.email}`}>
                    <button
                        className="btn btn-secondary"
                        id="about-btn"
                    >
                     Profile
                        </button>
                </Link>
                <Link to='#'>
                        <button
                            onClick={handleSignOut}
                            className="btn btn-secondary"
                            id="about-btn"
                        >
                            Sign Out
                        </button>
                    </Link>

                    
                </div>
                <Modal
                    isOpen={showModal}
                    onRequestClose={() => setShowModal(false)}
                    contentLabel="Sign Out Confirmation"
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)',
                            maxWidth: '400px',
                            padding: '20px',
                            borderRadius: '10px',
                            background: 'white',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            backgroundColor: "#fff"
                        }
                    }}
                >
                   <h2>
    Are you sure you want to log out?  
    <FontAwesomeIcon icon={faFrown} />
</h2>
                    <div>
                        <button onClick={confirmSignOut} className="btn btn-primary">Yes</button>
                        <button onClick={() => setShowModal(false)} className="btn btn-secondary">No</button>
                    </div>
                </Modal>
    
                
                <div className="home-main">
                <h1 className="description">A Yoga AI Trainer</h1>
                    <div className="btn-section">
                        <Link to={`/start/${user.currentUser.email}`}>
                            <button
                                className="btn "
                            >Let's Start</button>
                        </Link>
                        <Link to='/tutorials'>
                            <button
                                className="btn"
                            >Tutorials</button>
                        </Link>
    
                    </div>
                </div>
    
                <div className="home-main2">
                    <div className="info-section">
                        <h2>What is YogaIntelliJ?</h2>
                        <p>YogaIntelliJ is an AI-powered yoga trainer that provides personalized yoga sessions tailored to your needs and goals.</p>
                    </div>
    
                    <div className="testimonial-section">
                    <Carousel breakPoints={breakPoints}>
                    <Item style={{ backgroundColor: "#FDF4F5" }} className="testimonial-item">
  <div className="testimonial">
    <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
    <span>- {"Simran Jadhav"}</span>
  </div>
</Item>
<Item style={{ backgroundColor: "#D2E0FB" }} className="testimonial-item">
  <div className="testimonial">
    <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
    <span>- {"Rohan Jain"}</span>
  </div>
</Item>
<Item style={{ backgroundColor: "#F9F5F6" }} className="testimonial-item">
  <div className="testimonial">
    <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
    <span>- {"Mihir Chauhan"}</span>
  </div>
</Item>
<Item style={{ backgroundColor: "#E3F4F4" }} className="testimonial-item">
  <div className="testimonial">
    <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
    <span>- {"Devesh Karde"}</span>
  </div>
</Item>

        
            </Carousel>
                        
                        
                    </div> 
    
    
    
                    <div className="feature-section">
        <h2>Key Features</h2>
        <div className="feature-cards">
            <div className="feature-card">
                <h3>Personalized yoga sessions</h3>
                <p>Get yoga sessions tailored to your needs and goals.</p>
            </div>
            <div className="feature-card">
                <h3>Real-time feedback and guidance</h3>
                <p>Receive immediate feedback and guidance during your yoga practice.</p>
            </div>
            <div className="feature-card">
                <h3>Progress tracking and analytics</h3>
                <p>Track your progress and analyze your performance over time.</p>
            </div>
            <div className="feature-card">
                <h3>Access to a library of yoga poses and sequences</h3>
                <p>Explore a comprehensive library of yoga poses and sequences.</p>
            </div>
        </div>
    </div>
    
    
    <div className="benefits-section">
        <h2>Benefits of YogaIntelliJ</h2>
        <div className="benefits-cards">
            <div className="benefit-card">
                <h3>Improve flexibility and strength</h3>
                <p>YogaIntelliJ helps improve flexibility and strength through personalized yoga sessions.</p>
            </div>
            <div className="benefit-card">
                <h3>Reduce stress and anxiety</h3>
                <p>Using YogaIntelliJ can reduce stress and anxiety levels with tailored yoga practices.</p>
            </div>
            <div className="benefit-card">
                <h3>Enhance mindfulness and relaxation</h3>
                <p>YogaIntelliJ promotes mindfulness and relaxation with guided yoga sessions.</p>
            </div>
            <div className="benefit-card">
                <h3>Boost overall well-being</h3>
                <p>Regular use of YogaIntelliJ contributes to overall well-being by improving physical and mental health.</p>
            </div>
        </div>
    </div>
                    
    <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-links">
                            <Link to='/about' className="footer-link">About Us</Link>
                            <Link to='/contact' className="footer-link">Contact Us</Link>
                            <Link to='/privacy' className="footer-link">Privacy Policy</Link>
                        </div>
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://www.twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                    <p className="footer-text">&copy; 2024 YogaIntelliJ. All rights reserved.</p>
                </div>
            </footer>
                </div>
    
                
            </div>
            
        )
      } else {
        return (
            <div className="home-container">
                <div className="popup">
                    <div className="popup-content">
                        <h2>Oh No! <FontAwesomeIcon icon={faSurprise} /> Sign Up First</h2>
                        <div>
                            <Link to="/signup" className="btn btn-primary">
                                Yess
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    

}






// import React from 'react'
// import { Link } from 'react-router-dom'
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import './Home.css'
// import { useSelector } from 'react-redux';
// import { selectUsers } from '../../store/usersSlice';
// import Signup from '../Sign Up/Signup';
// import Signin from '../Sign In/Signin';
// import Profile from '../Profile/Profile';

// const KeyFeatureCard = ({ title, description }) => {
//     return (
//         <div className="key-feature-card">
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </div>
//     );
// };
// const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 1 },
//     { width: 768, itemsToShow: 1 },
//     { width: 1200, itemsToShow: 1 },
//   ];

// export default function Home() {
//         // User is signed up or logged in, show the Home content
//         return (
//             <div className='home-container'>
//                 <div className='home-header'>
//                     <h1 className='home-heading'>YogaIntelliJ</h1>
                    
//                     <Link to='/signup'>
//                         <button 
//                             className="btn btn-secondary" 
//                             id="about-btn"
//                         >
//                             Sign Up
//                         </button>
//                     </Link>
//                     <Link to='/signin'>
//                         <button 
//                             className="btn btn-secondary" 
//                             id="about-btn"
//                         >
//                             Sign In
//                         </button>
//                     </Link>
//                     <Link to='/profile'>
//                         <button 
//                             className="btn btn-secondary" 
//                             id="about-btn"
//                         >
//                             Profile
//                         </button>
//                     </Link>
//                 </div>
    
                
//                 <div className="home-main">
//                 <h1 className="description">A Yoga AI Trainer</h1>
//                     <div className="btn-section">
//                         <Link to='/start'>
//                             <button
//                                 className="btn "
//                             >Let's Start</button>
//                         </Link>
//                         <Link to='/tutorials'>
//                             <button
//                                 className="btn"
//                             >Tutorials</button>
//                         </Link>
    
//                     </div>
//                 </div>
    
//                 <div className="home-main2">
//                     <div className="info-section">
//                         <h2>What is YogaIntelliJ?</h2>
//                         <p>YogaIntelliJ is an AI-powered yoga trainer that provides personalized yoga sessions tailored to your needs and goals.</p>
//                     </div>
    
//                     <div className="testimonial-section">
//                     <Carousel breakPoints={breakPoints}>
//             <Item>
//               <div className="testimonial">
//                 <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
//                 <span>- {"Jessica S"}</span>
//               </div>
//             </Item>
//             <Item>
//               <div className="testimonial">
//                 <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
//                 <span>- {"Jessica S"}</span>
//               </div>
//             </Item>
//             <Item>
//               <div className="testimonial">
//                 <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
//                 <span>- {"Jessica S"}</span>
//               </div>
//             </Item>
//             <Item>
//               <div className="testimonial">
//                 <p>{"YogaIntelliJ has transformed my yoga practice. I feel more confident and stronger with each session."}</p>
//                 <span>- {"Jessica S"}</span>
//               </div>
//             </Item>
        
//             </Carousel>
                        
                        
//                     </div> 
    
    
    
//                     <div className="feature-section">
//         <h2>Key Features</h2>
//         <div className="feature-cards">
//             <div className="feature-card">
//                 <h3>Personalized yoga sessions</h3>
//                 <p>Get yoga sessions tailored to your needs and goals.</p>
//             </div>
//             <div className="feature-card">
//                 <h3>Real-time feedback and guidance</h3>
//                 <p>Receive immediate feedback and guidance during your yoga practice.</p>
//             </div>
//             <div className="feature-card">
//                 <h3>Progress tracking and analytics</h3>
//                 <p>Track your progress and analyze your performance over time.</p>
//             </div>
//             <div className="feature-card">
//                 <h3>Access to a library of yoga poses and sequences</h3>
//                 <p>Explore a comprehensive library of yoga poses and sequences.</p>
//             </div>
//         </div>
//     </div>
    
    
//     <div className="benefits-section">
//         <h2>Benefits of YogaIntelliJ</h2>
//         <div className="benefits-cards">
//             <div className="benefit-card">
//                 <h3>Improve flexibility and strength</h3>
//                 <p>YogaIntelliJ helps improve flexibility and strength through personalized yoga sessions.</p>
//             </div>
//             <div className="benefit-card">
//                 <h3>Reduce stress and anxiety</h3>
//                 <p>Using YogaIntelliJ can reduce stress and anxiety levels with tailored yoga practices.</p>
//             </div>
//             <div className="benefit-card">
//                 <h3>Enhance mindfulness and relaxation</h3>
//                 <p>YogaIntelliJ promotes mindfulness and relaxation with guided yoga sessions.</p>
//             </div>
//             <div className="benefit-card">
//                 <h3>Boost overall well-being</h3>
//                 <p>Regular use of YogaIntelliJ contributes to overall well-being by improving physical and mental health.</p>
//             </div>
//         </div>
//     </div>
                    
//     <footer className="footer">
//                 <div className="container">
//                     <div className="footer-content">
//                         <div className="footer-links">
//                             <Link to='/about' className="footer-link">About Us</Link>
//                             <Link to='/contact' className="footer-link">Contact Us</Link>
//                             <Link to='/privacy' className="footer-link">Privacy Policy</Link>
//                         </div>
//                         <div className="social-media-icons">
//                             <a href="https://www.facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebook} /></a>
//                             <a href="https://www.twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
//                             <a href="https://www.instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
//                         </div>
//                     </div>
//                     <p className="footer-text">&copy; 2024 YogaIntelliJ. All rights reserved.</p>
//                 </div>
//             </footer>
//                 </div>
    
                
//             </div>
            
//         )
      
    
// }



