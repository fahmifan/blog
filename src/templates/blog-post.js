import React from 'react';
import Helmet from 'react-helmet';
import classes from './blog-post.module.scss';

export default function Template({data}) {
  const { markdownRemark: post } = data;
  return (
    <div>
      <Helmet title={ `Blog of Uneh - ${post.frontmatter.title}` } />
      <div className={classes.bpContainer}>
        <h1>{ post.frontmatter.title }</h1>
        <div
          dangerouslySetInnerHTML={{__html: post.html}}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
