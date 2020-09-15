import React from "react";
import web from "../src/images/hero-img.png";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
     <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                   Sudhanshu Mohan
                   <br></br>
                    <strong className="brand-name"> Full Stack Developer </strong>
                  </h1>
                  <h2 className="my-3">
                  Sudhanshu has 5+ years of experience writing web apps.
                  He has extensive knowledge of front-end JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like Angular, React and Redux.
                  Sudhanshu's deep full-stack experience includes Node.js and Express, MongoDB as well as more traditional technologies like ASP.NET, and SQL.
                  </h2>
                  <div className="mt-3">
                    <NavLink to='/contact' className="btn-get-started ">
                      Contact Now
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src= { web }
                    className="img-fluid animated"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Common
        name="Hi, I am Sudhanshu Mohan"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      /> */}
    </>
  );
};

export default About;
