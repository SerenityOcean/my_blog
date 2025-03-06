import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import posts from "../data.jsx";
import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <Container className="my-4">
        <h1 className="text-center">文章不存在</h1>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </Container>
  );
};

export default PostDetail;
