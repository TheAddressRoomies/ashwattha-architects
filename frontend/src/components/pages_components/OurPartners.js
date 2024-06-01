import React, { useState } from "react";
import "./OurPartners.css";
import starbucks from "../../assets/starbucks.png";

import mercedes from "../../assets/mercedes.png";
import mcd from "../../assets/mcdonalds.png";
import nfl from "../../assets/nfl.png";
import { Link } from "react-router-dom";

const partners = [
  {
    id: 1,
    company: "ABC",
    logo: starbucks,
    website: "https://www.google.com",
  },
  {
    id: 2,
    company: "ABC",
    logo: mercedes,
    website: "https://www.google.com",
  },
  {
    id: 3,
    company: "ABC",
    logo: mcd,
    website: "https://www.google.com",
  },
  {
    id: 4,
    company: "ABC",
    logo: nfl,
    website: "https://www.google.com",
  },
  {
    id: 5,
    company: "ABC",
    logo: starbucks,
    website: "https://www.google.com",
  },
  {
    id: 6,
    company: "ABC",
    logo: mercedes,
    website: "https://www.google.com",
  },
  {
    id: 7,
    company: "ABC",
    logo: nfl,
    website: "https://www.google.com",
  },
  {
    id: 1,
    company: "ABC",
    logo: starbucks,
    website: "https://www.google.com",
  },
  {
    id: 2,
    company: "ABC",
    logo: mercedes,
    website: "https://www.google.com",
  },
  {
    id: 3,
    company: "ABC",
    logo: mcd,
    website: "https://www.google.com",
  },
  {
    id: 4,
    company: "ABC",
    logo: nfl,
    website: "https://www.google.com",
  },
  {
    id: 5,
    company: "ABC",
    logo: starbucks,
    website: "https://www.google.com",
  },
  {
    id: 6,
    company: "ABC",
    logo: mercedes,
    website: "https://www.google.com",
  },
  {
    id: 7,
    company: "ABC",
    logo: nfl,
    website: "https://www.google.com",
  },
];
function OurPartners() {
  return (
    <div className="partner-container">
      <div class="slider">
      <div className="partner-header">Meet Our Partners</div>
        <div class="slide-track">
          {partners.map((partner) => (
            <div class="slide">
              <Link to={partner.website} target="_blank">
                <img src={partner.logo} alt={partner.company} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
