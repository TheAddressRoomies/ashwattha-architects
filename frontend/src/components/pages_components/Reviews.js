import React, { useState } from 'react';
import './Reviews.css';  
import billgates from "../../assets/bill.png";

const reviews = [
  {
    image: billgates,
    name: "Jessica Devis",
    company: "CEO @ MARKETING DIGITAL LTD.",
    text: "\"The connections you make at Web Summit are unparalleled, we met users all over the world.\"",
    stars: 4
  },
  {
    image: billgates,
    name: "Linde Michel",
    company: "MARKETING @ APPLE INC.",
    text: "\"Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.\"",
    stars: 5
  },
  {
    image: billgates,
    name: "Misha Stam",
    company: "DESIGNER @ APPLE INC.",
    text: "\"The pessimist complains about the the optimist expects it to change; the realist adjusts the sails.\"",
    stars: 4
  },
  {
    image: billgates,
    name: "Alex Johnson",
    company: "DEVELOPER @ GOOGLE LLC",
    text: "\"An incredible experience that provides valuable networking opportunities and insights.\"",
    stars: 5
  },
  {
    image: billgates,
    name: "Sarah Parker",
    company: "MANAGER @ MICROSOFT CORP.",
    text: "\"A must-attend event for anyone looking to expand their professional horizons.\"",
    stars: 4
  }
];

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, reviews.length - visibleCards));
  };

  const [visibleCards, setVisibleCards] = useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1200) setVisibleCards(3);
      else if (screenWidth > 800) setVisibleCards(2);
      else setVisibleCards(1);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="reviews-container">
      <h1>What People think about us</h1>
      <p>That's the main thing people are controlled by! Thoughts - their perception of themselves!</p>
      <div className="reviews-carousel">
        <button className="arrow" onClick={handlePrev} disabled={currentIndex === 0}>&lt;</button>
        <div className="profiles">
          {reviews.slice(currentIndex, currentIndex + visibleCards).map((review, index) => (
            <div key={index} className="profile">
              <img src={review.image} alt={review.name} className="profile-pic" />
              <div className="profile-name">{review.name}</div>
              <div className="profile-company">{review.company}</div>
              <p>{review.text}</p>
              <div className="stars">{'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}</div>
            </div>
          ))}
        </div>
        <button className="arrow" onClick={handleNext} disabled={currentIndex >= reviews.length - visibleCards}>&gt;</button>
      </div>
    </div>
  );
}

export default Reviews;
