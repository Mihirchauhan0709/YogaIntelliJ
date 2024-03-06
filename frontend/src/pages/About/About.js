import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="about-container">
            
            <div className="about-main">
                <p className="about-content">
                    This is a real-time AI-based Yoga Trainer which detects your pose and evaluates your performance.
                    It was developed as a group project, aiming to provide a platform for users to improve their yoga practice with AI assistance.
                    The project is open-source and available on GitHub - <a href="https://github.com/">https://github.com/</a>.
                    
                    The AI system predicts keypoints or coordinates of different body parts in an image and utilizes a classification model to identify yoga poses.
                    When the AI detects a pose with over 96% probability, it provides feedback by highlighting the virtual skeleton in green, indicating correct alignment.
                    The pose detection model is based on Tensorflow's pretrained Movenet Model, and a neural network is built on top of it to classify yoga poses.

                    The model training was conducted using Python, and leveraging TensorFlowJS, the Keras/Tensorflow model was converted to TensorFlowJS for browser support.
                </p>
                <div className="developer-info">
                    <h4>About Developers</h4>
                    <p className="about-content">The Yoga Trainer project was developed collaboratively by a group of developers passionate about technology and AI.
                        The aim was to create an accessible tool for individuals to enhance their yoga practice through AI guidance.
                    </p>
                    <p className="about-content">The team consists of frontend and backend developers, machine learning engineers, and UI/UX designers, all dedicated to creating a seamless and intuitive experience for users.</p>
                    <p className="about-content">Continuous improvement and updates are part of our commitment to ensuring the Yoga Trainer remains a valuable resource for yoga enthusiasts worldwide.</p>
                </div>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p className="about-content">We welcome feedback, suggestions, and collaboration opportunities. Feel free to reach out to us via email at <a href="mailto:contact@yogatrainer.com">contact@yogatrainer.com</a> or connect with us on social media.</p>
                    <p className="about-content">Follow us on Twitter: <a href="https://twitter.com/YogaTrainer">@YogaTrainer</a></p>
                    <p className="about-content">Join our community on Discord: <a href="https://discord.gg/yogatrainer">Yoga Trainer Discord</a></p>
                </div>
            </div>
        </div>
    );
}
