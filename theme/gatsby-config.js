const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Marlin Gingerich`,
    subtitle: `software developer`,
    description: `👨‍💻`,
    author: `@gingerich`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.resolve(`content`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.resolve(`images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-reading-time`, {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases:{sh: "bash", js:"javascript"},
            showLineNumbers: true,
          }
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-julia`,
        short_name: `julia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: path.resolve(__dirname, `src/images/gatsby-icon.png`), // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.resolve(__dirname, `src/pages`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}