import React from 'react'
import Hero from './Hero.jsx'
import Content from './Content.jsx'
import Content2 from './Content2.jsx'
import Content3 from './Content3.jsx'
import Footer from './Footer.jsx'
import Navbar2 from './Navbar2'

export default function Home() {
    return (
        <>
        <Navbar2/>
        <Hero/>
        <Content/>
        <Content2/>
        <Content3/>
        <Footer/>
        </>
    )
}