import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1 style={{marginRight:"97%"}}>Projects</h1> 
        <div className="row d-flex justify-content-center">
          {projects.map((data) => (
            <div
              key={data.id}
              className="my-4 col-sm-6 col-md-4 col-lg-3 sm-2" 
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div
                      className="card bg-dark text-light"
                      style={{
                        width: "100%",
                        border: "1px solid yellow",
                        boxShadow: "5px 5px 10px 0px rgba(101,175,10,0.5)",
                        borderRadius: "10px", 
                      }}
                    >
                      <div className="img d-flex justify-content-center align-items-center p-3">
                        <img
                          src={`/assets/${data.imgSrc}`}
                          className="card-img-top"
                          alt="projectsImg"
                          style={{
                            height: "250px",
                            width: "100%",
                            objectFit: "cover",
                            border: "2px solid yellow",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a
                        href={data.source}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
