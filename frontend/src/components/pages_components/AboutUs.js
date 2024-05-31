// AboutUsPage.js
import React from 'react';
import './AboutUsPage.css'; // Import your CSS file
import teamImage from '../../assets/background3.png'; // Import the team image
import teamMember1 from '../../assets/1.jpg';
import teamMember2 from '../../assets/2.jpg';
import teamMember3 from '../../assets/3.jpg';

function AboutUsPage() {
    return (
        <div className="about-us-container">
            <header>
                <h1>About Us</h1>
            </header>
            <div className="background-image"></div>
            <div className="content-container">
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>We are a <span className="fancy-text">team of passionate individuals</span> dedicated to creating innovative solutions to...</p>
                    <p><span className="highlight">Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Nullam at volutpat nunc. Ut blandit...</p>
                    <img src={teamImage} alt="Our Team" className="team-image" />
                </div>
                <div className="team-section">
                    <h2>Our Team</h2>
                    <p>Meet the faces behind our success:</p>
                    <div className="team-members">
                        <div className="team-member">
                            <img src={teamMember1} alt="John Doe" />
                            <p>John Doe - CEO</p>
                        </div>
                        <div className="team-member">
                            <img src={teamMember2} alt="Jane Smith" />
                            <p>Jane Smith - CTO</p>
                        </div>
                        <div className="team-member">
                            <img src={teamMember3} alt="Emily Johnson" />
                            <p>Emily Johnson - Lead Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;

