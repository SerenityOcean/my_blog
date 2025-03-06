import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import PostDetail from "./pages/PostDetail.jsx";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        {/* 导航栏 */}
        <Header />

        {/* 主体内容：根据路由渲染不同页面 */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/:id" element={<PostDetail />} />

            <Route
              path="*"
              element={<h1 className="text-center my-4">404 - 页面不存在</h1>}
            />
          </Routes>
        </main>

        {/* 页脚 */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
