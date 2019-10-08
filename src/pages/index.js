import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <lu>  
      <li>
        <a href="/about"> About </a> 
      </li>
      <li>
        <Link to="/about"> About Link</Link>
      </li>
    </lu>
  </Layout>
)

export default IndexPage
