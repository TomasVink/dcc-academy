module.exports = {
  siteMetadata: {
    title: 'ttc-academy'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/'
    //   },
    //   __key: 'images'
    // }
  ]
}
