import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './HomePage.css';
import CountUp from 'react-countup';
import './AutoIncrementLayout.css';

const AutoIncrementLayout = () => (
    <div className="container auto-increment-layout">
        <Row className="justify-content-sm-evenly">
            <Col sm  lg="2" className="auto-increment-card d-flex flex-column align-items-center">
                <CountUp
                    start={0}
                    end={100}
                    duration={3}
                    delay={1}
                    suffix='+'
                    useIndianSeparators={true}
                    scrollSpyOnce={true}
                    className="auto-increment-number"
                />
                <p className="auto-increment-text">
                    Projects<br/>Designed
                </p>
            </Col>
            <Col sm lg="2" className="auto-increment-card d-flex flex-column align-items-center">
                <CountUp
                    start={0}
                    end={35}
                    duration={3}
                    delay={1}
                    useIndianSeparators={true}
                    scrollSpyOnce={true}
                    className="auto-increment-number"
                />
                <p className="auto-increment-text">
                    Million Sq.Ft<br/>Constructed
                </p>
            </Col>
            <Col sm lg="2" className="auto-increment-card d-flex flex-column align-items-center">
                <CountUp
                    start={0}
                    end={45}
                    duration={3}
                    delay={1}
                    useIndianSeparators={true}
                    scrollSpyOnce={true}
                    className="auto-increment-number"
                />
                <p className="auto-increment-text">
                Billion Rupees<br/>Cost Of Projects
                </p>
            </Col>
            <Col sm lg="2" className="auto-increment-card d-flex flex-column align-items-center">
                <CountUp
                    start={0}
                    end={10}
                    duration={3}
                    delay={1}
                    useIndianSeparators={true}
                    scrollSpyOnce={true}
                    className="auto-increment-number"
                />
                <p className="auto-increment-text">
                    Awards<br/>Winner
                </p>
            </Col>
        </Row>
    </div>
    
);

export default AutoIncrementLayout;