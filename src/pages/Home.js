import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Features from '../components/Features'

export default function Home() {
    return (
        <React.Fragment>
            <Hero>
                <Banner title="Buying. Selling. The right way." />
                <div className="hero-call-to-action">
                    <button className="hero-btn">Get Started</button>
                </div>
            </Hero>
            <Features />
        </React.Fragment>
    )
}