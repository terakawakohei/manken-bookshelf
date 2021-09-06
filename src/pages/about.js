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
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

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
          {/* <h3 id="dynamic-styles">このサイトについて</h3> */}
          <p>
            ここでは、六甲祭の中止によりweb上での公開となった2020年度発行の「みーはー174/VOOM+66」を公開するサイトです。
          </p>
          <p>
            2021年度の六甲祭も中止が決定したため、今年発行予定の「みーはー175/VOOM+67」を11月ごろに公開する予定です。
            ここでは、実地開催が中止となった2020年度の六甲祭で公開した神戸大学漫画研究会が例年発
            神戸大学漫画研究会では神戸大学の学園祭である「六甲祭」に例年出展し、作品展示や部誌販売を行っています。
          </p>
          <p>
            2020年度は六甲祭が中止となったため{" "}
            <a href="https://docs.ghost.org/api/handlebars-themes/">web展示</a>{" "}
            を行い、作品展示や部誌の公開を行いました。
          </p>
          <p>
            Don't forget to check out the{" "}
            <a href="https://docs.ghost.org/integrations/">
              Ghost Integrations Directory
            </a>{" "}
            for more ways to integrate Ghost with your favourite services.
          </p>
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
