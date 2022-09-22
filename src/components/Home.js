import React from "react";
import { image, name, city } from "../data/data.js";
// import "../index.css"
function Home() {
  // update the JSX being returned!
  return (
  <div id="#home">
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
    <p>I love  how to code and actually put it into practice</p>
    <img src={image} alt='I made this'></img>
  </div>)
}

export default Home;
