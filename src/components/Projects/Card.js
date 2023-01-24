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
      return {
        color,
        ele
      }
    });
    return chips;
  };

  const retChips = mmmChips(chips);

  return (
    <div className="card">
      <main id="cardContent">
        <div className="img-container">
          <img src={img} alt={title} />
        </div>
        <h2>{title}</h2>
        <div id="chips">
          {retChips.map((ele, i) => (
            <p id="chip" key={i} className={ele.color}>
              {ele.ele}
            </p>
          ))}
        </div>
        <p id="projectDesc">{desc}</p>
      </main>
      <div className="btnHolder">
        <a href={url} target="_blank" rel="noreferrer" className="goToBtn">
          Check it out
        </a>
      </div>
    </div>
  );
};
