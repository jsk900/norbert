import React from "react";
import Header from "./Header";
import "./css/home.css";
const Home = () => {
  const theme = "menu-bar1";
  return (
    <div className="home-back">
      <div className="clip1" />
      <Header theme={theme} />
      <h1 className="main_title">Norbert Karrass</h1>
    </div>
  );
};
export default Home;
