import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import "purecss/build/pure.css"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: "blog"}
  }

  selectCategory(category){
    this.setState({
      category
    });
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Bryant Khoo" />
        <Bio />
        <div class="pure-button-group" role="group" aria-label="...">
          <button class="pure-button" onClick={()=>this.selectCategory('blog')}>Blog</button>
          <button class="pure-button" onClick={()=>this.selectCategory('coding')}>Coding</button>
          <button class="pure-button" onClick={()=>this.selectCategory('tutorial')}>Tutorial</button>
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          if (node.frontmatter.tags.includes(this.state.category)){
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          }
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
