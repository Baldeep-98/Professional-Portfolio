import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Baldeep Sharma.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Welcome to my Profile',
        "I'm Baldeep Sharma",
        "I'm a full-stack developer",
        "PHP developer",
        "React developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left">
        <h1 ref={typedRef}></h1>
        <a
          href={pdf}
          download="Baldeep Sharma.pdf"
          className="btn btn-outline-warning my-3"
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
  );
};

export default Home;
