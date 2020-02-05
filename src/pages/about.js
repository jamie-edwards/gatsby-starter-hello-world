import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutmePage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>London based web solutions for small start up's and global companies.</p>
            <p><Link to="/contact">Want to work with me? Get in touch.</Link></p>
        </Layout>
    )
}

export default AboutmePage