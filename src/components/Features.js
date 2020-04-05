import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import calimg from '../images/appraisal-cal.jpg'
import saveimg from '../images/save-money.jpg'
import netimg from '../images/networth-increase.jpg'
import teamimg from '../images/team-img.jpg'
import Title from "./Title";
import Cards from './cards/Cards'

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="features" id="features">
                    <div className="feat-title"><Title title="How it works" /></div>
                    <p>Whether you're buying or selling, our services will provide you with your homes true value.</p>
                </div>
                <Container className="grid-cont">
                    <Row justify="start">
                        <Col md={8}>
                            <div className="info-1">
                                <h4>We establish the value your home</h4>
                                <ul className="info">
                                    <li >
                                        <b>Criteria</b> - to calculate the value of a home,
                                        our team uses location, age, condition, renovations,
                                        and recent local home sales data to detirmine true value. 
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="img-cont"><img src={calimg} alt="" /></div>
                        </Col>
                    </Row>

                    <br />

                    <Row justify="end">
                        <Col md={8}>
                            <div className="img-cont-2"><img src={netimg} alt="" /></div>
                        </Col>
                        <Col md={4}>
                            <div className="info-2">
                                <h4>Our valuation impacts</h4>
                                <ul className="info">
                                    <li >
                                        <b>The cost of the loan</b> - lender won’t give you a loan 
                                        for more than the appraised value.
                                    </li>
                                    <li>
                                        <b>Instant equity</b> - If our valuation is higher
                                        than what you’re paying for the home. You benifit form the
                                        pump in equity.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <br />

                    <Row justify="start">
                        <Col md={8}> 
                            <div className="info-3">
                                <h4>Save money on loan interest</h4>
                                <ul className="info">
                                    <li >Benifits</li>
                                    <li >Benifits</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="img-cont-3"><img src={saveimg} alt="" /></div>
                        </Col>
                    </Row>

                    <br />

                    <Row justify="center">
                        <Col md={8}>
                            <div className="img-team"><img src={teamimg} alt="" /></div>
                        </Col>
                        <Col md={4}>
                            <div className="team">
                                <h4>Meet our Home value experts</h4>
                                <ul>
                                    <li className="about-blurb">            
                                    Our team of certified residential appraiser have evaluated over 1000 properties and saved home owners on average 600 dollars.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="products" id="products">
                    <Title title="Packages" />
                    <div className="prod-cards"><Cards /></div>
                </div>
            </React.Fragment>
        )
    }
}