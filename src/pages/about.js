import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          {/* <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Clean, minimal, and deeply customisable. London is a theme made for
            people who appreciate simple lines.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3 id="dynamic-styles">このサイトについて</h3>
          <p>
            神戸大学漫画研究会では神戸大学の学園祭である「六甲祭」に例年出展し、作品展示や部誌販売を行っています。
          </p>
          <p>
            しかし、コロナウイルス感染拡大の影響により2020年、2021年は六甲祭が中止となりました。
          </p>
          <p>
            このサイトでは、六甲祭の中止によりweb上での公開となった2020年度、2021年度発行の
          </p>
          <h6 id="heading-level-6">「みーはー175/VOOM+67」</h6>
          <h6 id="heading-level-6">「みーはー177/VOOM+69」</h6>
          <p>を電子書籍の形で公開しています。</p>
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
    smallPic: file(relativePath: { eq: "FDRHXWeaUAAwz1V.jpeg" }) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxHeight: 1360) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
