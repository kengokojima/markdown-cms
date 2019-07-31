import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <ol className="p-article-list">
        {posts &&
          posts.map(({ node: post }) => (
            <li
              className={`p-article-list__item ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
              key={post.id}
            >
              <article className="p-article-cell">
                <Link to={post.fields.slug} className="p-article-link">
                  {post.frontmatter.featuredimage ? (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`,
                        className: 'c-article-cell__image',
                        style: `transition: all .3s`
                      }}
                    />
                  ) : null}

                  <div className="c-article-cell__header">
                    <span className="c-article-cell__date">
                      {post.frontmatter.date}
                    </span>
                  </div>
                  <div className="c-article-cell__body">
                    <h2 className="c-article-cell__title">
                      {post.frontmatter.title}
                    </h2>
                  </div>
                </Link>
                <div className="c-article-cell__footer">
                  <ul className="c-article-tags">
                    {post.frontmatter.tags.map(tag => (
                      <li className="c-article-tags__list" key={tag}>
                        <Link to="#">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
      </ol>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                tags
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
