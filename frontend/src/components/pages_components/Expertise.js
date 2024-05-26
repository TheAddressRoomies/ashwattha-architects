import './Expertise.css';
import background from '../../assets/background.avif';
import background2 from '../../assets/background2.jpg';
import background3 from '../../assets/background3.png';
import { Col, Row } from 'react-bootstrap';

const Expertise = () => (
    // <Row className="expertise-container container flex-wrap-reverse">
    //         <Row className="image-section flex-wrap">
    //             <Col className="image-container" sm>
    //                 <div className="image-gradient-container">
    //                     <img src={background} alt="Architecture" className="image" />
    //                 </div>
    //             </Col>
    //             <Col className="image-container" sm>
    //                 <div className="image-gradient-container">
    //                     <img src={background2} alt="Architecture" className="image" />
    //                 </div>
    //             </Col>  
    //             <Col className="image-container" sm>
    //                 <div className="image-gradient-container">
    //                     <img src={background3} alt="Architecture" className="image" />
    //                 </div>
    //             </Col>
            
    //         </Row>
    //         <Col className="text-section">
    //                 <h2>Our Expertise</h2>
    //                 <p>
    //                     CCBA has a portfolio ranging from master planning of international cities and new towns to housing developments and complexes, hotels, resorts, educational and institutional campuses, corporate headquarters, healthcare, and books, with projects located pan India and abroad.
    //                 </p>
    //             </Col>
    // </Row>
        <div className="expertise-container flex-wrap-reverse">
        <div className="image-section">
            <div className="image-container">
                <div className="image-gradient-container">
                    <img src={background} alt="Architecture" className="image" />
                </div>
                <div className="caption">Architecture</div>
            </div>
            <div className="image-container">
                <div className="image-gradient-container">
                    <img src={background2} alt="Interiors" className="image" />
                </div>
                <div className="caption">Interior Design</div>
            </div>
            <div className="image-container">
                <div className="image-gradient-container">
                    <img src={background3} alt="Landscape" className="image" />
                </div>
                <div className="caption">Landscape</div>
            </div>
        </div>
        <div className="text-section m-lg-5">
        <h2>Our Expertise</h2>
        <p>
            Studio Ashwattha has a portfolio ranging from master planning of international cities and new towns to housing developments and complexes, hotels, resorts, educational and institutional campuses, corporate headquarters, healthcare, and books, with projects located pan India and abroad.
        </p>
        </div>
    </div>
);

export default Expertise;