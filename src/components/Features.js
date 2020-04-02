import React, { Component } from "react";
import Title from "./Title";
import Cards from './cards/Cards'

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="features">
                    <Title className="feat-title" title="How it works" />
                    <p>Whether you're buying or selling, our system will provide you with your homes true value.</p>
                </div>
                <div className="product-sell-1">
                    <Title title="Establishes the value of the home"/>
                    <p>Benifits</p>
                </div>
                <div className="product-sell-2">
                    <Title title="Determines cost of a loan"/>
                    <p>Benifits</p>
                </div>
                <div className="product-sell-3">
                    <Title title="Save money on loan interest"/>
                    <p>Benifits</p>
                </div>
                <div className="the-team">
                    <Title title="Meet our Home value experts" />
                    <p className="about-blurb">            
                       Our team of certified residential appraiser have evaluated over 1000 properties and saved home owners on average 600 dollars.
                    </p>
                </div>
                <div className="products">
                    <Title title="Packages" />
                    <Cards className="prod-cards"/>
                </div>
            </React.Fragment>
        )
    }
}