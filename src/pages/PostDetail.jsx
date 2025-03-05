import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data";

//显示具体博客的页面
const PostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>文章不存在</div>;
  }
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};
export default PostDetail;
