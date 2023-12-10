module.exports = {
  siteMetadata: {
    title: `My Sweet Gatsby Site!`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-image`,
            options: {
              maxWidth: 840,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74131346-111',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-jsx`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `styled-jsx-plugin`,
    `gatsby-plugin-react-helmet`
    // `gatsby-plugin-offline`
  ],
}
