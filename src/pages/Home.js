import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Navbar from "../components/Navbar"
import Features from '../components/Features'

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <Hero>
                <Banner title="Buying. Selling. The right way." 
                    subtitle="helping everyday people uncover value." >
                </Banner>
                <div className="hero-call-to-action">
                    <h1>Find out how much your Homes worth.</h1>
                    <button className="hero-btn">Get Appraised</button>
                </div>
            </Hero>
            <Features />
        </React.Fragment>
    )
}