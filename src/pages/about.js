import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutmePage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <p>I design and build bespoke projects. My background is in History of Art & Cultural studies read at The University of Leeds. Most recently, I was at Bonnier, before that I was at ComeOn! Group for over 3 years (2012–2017) during it’s start up phase. Over the past few years I have focused on front-end development projects across various verticals. I specialise in turning ideas into fully functional digital products.</p>
            <p><Link to="/contact">Get in touch.</Link></p>
        </Layout>
    )
}

export default AboutmePage
