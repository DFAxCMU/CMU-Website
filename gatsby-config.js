module.exports = {
    siteMetadata: {
        title: 'DFA@CMU',
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-csv`,
    ],
    pathPrefix: `/CMU-Website`,
};
