import BlogCard from "../cards/Blog";

const Blog = ({ data }) => {
  return (
    <>
      {data
        .filter((post) => post.Published)
        .map((post) => (
          <BlogCard
            link={`/blog/${post.id}`}
            title={post.Title}
            description={post.Description}
            // views={post.page_views_count}
            // reactions={post.public_reactions_count}
            // comments={post.comments_count}
          />
        ))}
    </>
  );
};

export default Blog;
