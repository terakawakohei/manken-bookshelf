import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const LinksPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            This is . This is <sup>superscript</sup>text and this is{" "}
            <sub>subscript</sub> text. This is <u>underlined</u> and this is
            code: . Finally, this is a <a href="#">link</a>.
          </p>
          {/* <h2 id="grid-system">外部サイト</h2> */}
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
                  <a href="https://kobekucc.github.io/">
                    神戸大学漫画研究会の図書館
                  </a>
                </strong>
              </div>
            </div>
          </div>
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
                  <a href="https://kobekucc.github.io/KuccBushi/panel2021.html">
                    2021年度web新歓パネル展
                  </a>
                </strong>
              </div>
            </div>
          </div>
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
                  <a href="https://t.co/X4jVYTDBhw?amp=1">
                    2020年度六甲祭web展示会
                  </a>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <LinksPage location={props.location} data={data} {...props} />
    )}
  />
)
