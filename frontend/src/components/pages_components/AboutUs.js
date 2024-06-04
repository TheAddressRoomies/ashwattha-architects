// AboutUsPage.js
import React from 'react';
import './AboutUsPage.css'; // Import your CSS file
import teamImage from '../../assets/background3.png'; // Import the team image
import teamMember1 from '../../assets/1.jpg';
import teamMember2 from '../../assets/2.jpg';
import teamMember3 from '../../assets/3.jpg';
import award from '../../assets/award.jpeg';

function AboutUsPage() {
    return (
        <div className="about-us-container">
            <header>
                <h1>About Us</h1>
            </header>
            <div className="background-image"></div>
            <div className="content-container">
                <div className='contain-about-head'>
                    <div id="borderLeft"></div>
                    <div className="about-section">
                        <h2>Our Story</h2>
                    </div>
                    
                    <div id="borderRight"></div>
                </div>
                <div className='our-story'>
                            <div src={teamMember1}></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting induorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                <div className='contain-about-head'>
                    <div id="borderLeft"></div>
                    <div className="about-section">
                        <h2>Awards</h2>
                    </div>
                    <div id="borderRight"></div>
                </div>
                <div className='awards-section'>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    <div className='award'>
                        <img src={award}></img>
                        <p>My Award 1</p>
                    </div>
                    
                </div>
                <div className='contain-about-head'>
                    <div id="borderLeft"></div>
                    <div className="about-section">
                        <h2>Our Team</h2>
                    </div>
                    <div id="borderRight"></div>
                </div>
                <p>Meet the faces behind our success:</p>
                <div className="team-section">
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
