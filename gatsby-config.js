require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://bithouse.com.ar", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/bithouse.png", // Path is relative to the root
          siteName: "Pueblos Originarios", // Used in manifest.json
          shortName: "Pueblos Originarios", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `v7mbts5r`,
        dataset: process.env.SANITY_DATASET,
        // a token with read permissions is required
        // if you have a private dataset
        //token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: `v7mbts5r`,
        dataset: process.env.SANITY_DATASET,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    /* {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WFTZCTM",
        includeInDevelopment: true,
        enableWebVitalsTracking: true,
      },
    } */
  ],
};
