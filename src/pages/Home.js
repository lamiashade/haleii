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
                <Banner title="Truely Professional. True Value." 
                    subtitle="We’ll help you find yours." >
                </Banner>
                <div className="hero-call-to-action">
                    <h1>Discover if you're eligible for free True value appraisal.</h1>
                    <button className="hero-btn">Get Appraised</button>
                </div>
            </Hero>
            <Features />
        </React.Fragment>
    )
}