import React from "react";
import pdf from "../pdf/Baldeep Sharma.pdf";
import hero from "./data/hero.json";
const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            tempore placeat omnis libero, eius ut, esse corrupti ipsa quos
            quidem itaque, natus nostrum repellendus deleniti dignissimos! Dolor
            enim a perspiciatis.
          </h1>
          <a
            href={pdf}
            download="Baldeep Sharma.pdf"
            className="btn btn-outline-warning"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
