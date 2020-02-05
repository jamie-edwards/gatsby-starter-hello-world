module.exports = {
    siteMetadata: {
        title: 'Jamie Edwards',
        author: 'JS Studio Ltd'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-transformer-remark'
    ]
}