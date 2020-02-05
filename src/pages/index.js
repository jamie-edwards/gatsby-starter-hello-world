import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Plan Code Grow</h1>
            <h2>I'm Jamie, a full-stack developer living in London. Developing websites that build brands.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage