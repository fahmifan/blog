module.exports = {
  pathPrefix: '/blog',
  siteMetadata: {
    title: `Gatsby Default Starter`,
    author: `fahmifan`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    }
  ]
}
