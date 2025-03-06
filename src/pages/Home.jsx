import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import posts from "../data.jsx";
import "./Home.css";

const Home = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Blog文章列表</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {posts.map((post) => (
            <Card className="mb-3" key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary" as={Link} to={`/posts/${post.id}`}>
                  阅读更多
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
