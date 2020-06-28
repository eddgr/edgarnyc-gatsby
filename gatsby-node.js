/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
      allProjectsJson {
        nodes {
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

  data.allProjectsJson.nodes.forEach(project => {
    actions.createPage({
      path: project.slug,
      component: require.resolve(`./src/templates/project.js`),
      context: {
        slug: project.slug,
      },
    })
  })
}
