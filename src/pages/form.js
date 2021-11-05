import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const FormPage = ({ data }, location) => {
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
          <h3 id="heading-level-3">✍</h3>
          <p>
            <strong>Comment</strong>
          </p>
        </div>
        <div className="post-content-body">
          <form name="impression" action="/completed" method="POST" netlify>
            <p>
              <label>
                <label
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <select name="role[]">
                    <option value="mi-ha-175">みーはー175</option>
                    <option value="voom67">voom+67</option>
                    <option value="mi-ha-177">みーはー177</option>
                    <option value="voom69">voom+69</option>
                  </select>
                </label>
                <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
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
      <FormPage location={props.location} data={data} {...props} />
    )}
  />
)
