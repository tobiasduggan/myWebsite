module.exports = {
  siteMetadata: {
    title: `tobiasDuggan`,
    description: `A place to discuss all of the personal projects I plan to undertake.`,
    author: `Tobias Duggan`,
    menuLinks:[
         {
          name:'About',
          link:'/about'
         }
  ]
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
          path: `${__dirname}/src/posts`,
          name: 'posts',
      }
    },
    'gatsby-transformer-remark'
  ],
}
