import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">首页</Link> | <Link to="/about">关于我</Link>
      </nav>
    </header>
  );
};

export default Header;
