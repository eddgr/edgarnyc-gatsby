/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
     allContentfulBlogPost {
        nodes {
          id
          title
          heroImage {
            fluid {
              src
            }
          }
          slug
          body {
            body
          }
          publishDate
          updatedAt
        }
      }
    }
  `)
  data.allContentfulBlogPost.nodes.forEach(node => {
    const { id, title, heroImage, slug, body, publishDate } = node;
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: slug,
        body: body.body,
        title: title,
        publishDate: publishDate,
        heroImage: heroImage
      },
    })
  })
}
