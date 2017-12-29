module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    author: `fahmifan`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    }
  ]
}
