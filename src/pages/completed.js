import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const CompletedPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <article className="post-content page-template no-image">
        <div
          className="post-content-body"
          style={{
            padding: "1rem 0",
            textAlign: "center",
          }}
        >
          <h3 id="heading-level-3">π</h3>
          <p>γγγγ¨γγγγγΎγοΌγ³γ‘γ³γγ―ιδΏ‘γγγΎγγγ</p>
        </div>
        <div className="post-content-body">
          {/* <h2 id="grid-system">ε€ι¨γ΅γ€γ</h2> */}
          <div className="row">
            <div className="col">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "center",
                  background: "#f2f2f2",
                }}
              >
                <strong>
                  <Link to={`/`}>Back</Link>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <CompletedPage location={props.location} data={data} {...props} />
    )}
  />
)
