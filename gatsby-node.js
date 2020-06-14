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
          slug
        }
      }
    }
  `)
  data.allContentfulBlogPost.nodes.forEach(node => {
    const { id, slug } = node;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: slug,
        id: id
      },
    })
  })
}
