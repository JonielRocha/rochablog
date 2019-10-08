import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
<StaticQuery
query={graphql`
query MySiteMetada {
    site {
      siteMetadata {
        title
        description
        author
        position
      }
    }
  }
  
`}
render={data =>(
<div className="Profile-wrapper">
    <h1>{data.site.siteMetadata.title}</h1>
    <h2>{data.site.siteMetadata.position}</h2>
    <h1>{data.site.siteMetadata.description}</h1>


</div>
)
}

    />
)

export default Profile
