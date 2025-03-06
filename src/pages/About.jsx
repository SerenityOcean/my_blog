import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="my-4">
      <div className="about-container">
        <h1 className="text-center mb-4">关于我</h1>
        <p>这是我的第一个博客网站</p>
        <p>虽然我也不知道它会被用来干嘛，也许写一些有趣，值得阅读的文章呢？</p>
      </div>
    </Container>
  );
};

export default About;
