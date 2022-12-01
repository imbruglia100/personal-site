import React from "react";
import "./Card.css";

export const Card = ({ title, img, url, chips, desc }) => {

  const mmmChips = (arr) => {
    const chips = arr.map((ele) => {
      let color = 'black'
      switch (ele.toLowerCase()) {
        case "javascript":
          color = "green";
          break;
        case "css":
          color = "yellow";
          break;
        case "html":
          color = "orange";
          break;
        case "react":
          color = "red";
          break;
        case "tailwind":
          color = "blue";
          break;
        default:
          color = 'black'
          break;
      }
      return <p id="chip" className={color}>{ele}</p>;
    });
    return chips;
  };

  const retChips = mmmChips(chips);

  return (
    <div className="card">
      <div className="img-container">
        <img src={img} alt={title} />
      </div>
      <main id="cardContent">
        <h2>{title}</h2>
        <p id="chips">{retChips.map((ele) => ele)}</p>
        <p id="projectDesc">{desc}</p>
        <a href={url} target="_blank" rel="noreferrer" className="btnHolder">
          <button className="goToBtn">Check it out</button>
        </a>
      </main>
    </div>
  );
};
