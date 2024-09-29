import React from "react";
import "./Home.css";

function Home(props) {
  const { children } = props;
  return <div className="home">{children}</div>;
}

export default Home;
