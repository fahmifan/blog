import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import classes from './pages.module.scss';

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div className={classes.pages}>
    {posts
      .filter(post => post.node.frontmatter.title.length > 0)
      .map( ({node: post}) => {
        return (
          <div key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <h3>{post.frontmatter.date}</h3>
            <p>{post.excerpt}</p>
          </div>
        );
      })
    }
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;