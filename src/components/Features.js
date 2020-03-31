import React, { Component } from "react";
import Title from "./Title";
import Cards from './cards/Cards'

export default class Features extends Component {
    render() {
        return (
                <React.Fragment>
                <div className="features">
                    <Title title="Features" />
                    <hr className="line"/>
                        <div className="features-center">
                            <Cards />
                        </div>
                </div>

                <hr className="line"/>

                <div className="about">
                    <Title title="What is Haleii" />
                        <div className="about-center">
                            <p className="about-blurb">
                                Whether you are buying or selling, Haleii will let you know exactly what your home is worth. Our True Value system is a certified appraisal peformed by professionals, not algorithms or realtors.
                                Get your the home you are selling or buying True value certified and have the peace of mind of know exactly what your home is worth.
                            </p>
                        </div>
                </div>
            </React.Fragment>
        )
    }
}