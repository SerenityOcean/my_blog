import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data";

const Home = () => {
  return (
    <>
      <h1>Blog文章列表</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
