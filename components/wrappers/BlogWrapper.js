import { useEffect } from "react";
import fetch from "isomorphic-unfetch";
import BlogCard from "../cards/Blog";

const Blog = ({ data }) => {
  return (
    <>
      {data.map((post) => (
        <BlogCard
          link={post.canonical_url}
          title={post.title}
          description={post.description}
          views={post.page_views_count}
          reactions={post.public_reactions_count}
          comments={post.comments_count}
        />
      ))}
    </>
  );
};

export default Blog;
