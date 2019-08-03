// @flow
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import { graphql } from 'gatsby'



class IndexPage extends React.Component {
  render() {
    const about = this.props.data.about.edges[0].node

    return (
      <Layout title={`Home - Karin Lilliehöök`}>
        <Sidebar />
        <Page title={`About me`}>
        <div
          dangerouslySetInnerHTML={{ __html: about.html }}
        />
        </Page>
      </Layout>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query {
    about: allMarkdownRemark(
      filter: { frontmatter: { slug: { eq: "about" } } }
      limit: 1
    ) {
      totalCount
      edges {
        node {
          excerpt
          html
          frontmatter {
            slug
            title

          }
        }
      }
    }
  }
`
