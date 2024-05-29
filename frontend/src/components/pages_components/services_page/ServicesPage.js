import React from "react";
import "./ServicesPage.css";
import engineeringImage from "../../../assets/engineering.jpg";
import business from "../../../assets/business.jpeg";
import Typing from "react-typing-effect";

import interior from "../../../assets/Interior.jpg";

const ServicesPage = () => {
  return (
    <div>
      <div className="services-header">
        <div className="typing-container">
          <Typing
            text={["What Services do we offer?"]}
            speed={100}
            eraseSpeed={0}
            eraseDelay={10000000000}
            typingDelay={500}
          />
        </div>
        <div className="typing-container-p">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
            imperdiet nulla. Ut dapibus, lacus in volutpat porta, nisl urna
            varius justo, vel mollis neque magna eget nunc. Donec placerat
            dapibus nibh, eu dictum enim congue vel. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
      <div className="services-container">
        <div key="1" className="service">
          <div className="service-images service-text-left">
            <img src={engineeringImage} alt="engineering" />
          </div>
          <div className="service-text service-text-right">
            <h2 className="service-header">Architecture</h2>
            <div className="service-text-box">
              <p>
                We provide high quality renovation and rebuild service and
                dramatically increase the value of your property, in both
                Artistic and Honesty.
              </p>
            </div>
          </div>
        </div>
        <div key="2" className="service">
          <div className="service-images hide-if-desktop ">
            <img src={interior} alt="background" />
          </div>
          <div className="service-text service-text-left">
            <h2 className="service-header">Interior Design</h2>
            <div className="service-text-box">
              <p>
                We provide high quality renovation and rebuild service and
                dramatically increase the value of your property, in both
                Artistic and Honesty.
              </p>
            </div>
          </div>
          <div className="service-images hide-if-mobile service-text-right">
            <img src={interior} alt="background" />
          </div>
        </div>
        <div key="3" className="service">
          <div className="service-images">
            <img src={engineeringImage} alt="engineering" />
          </div>
          <div className="service-text service-text-right">
            <h2 className="service-header">Landscaping</h2>
            <div className="service-text-box">
              <p>
                We provide high quality renovation and rebuild service and
                dramatically increase the value of your property, in both
                Artistic and Honesty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
