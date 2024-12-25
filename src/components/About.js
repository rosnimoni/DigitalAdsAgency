import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import about1 from "../assets/imgs/about/1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>
       <section className="about__area-3">
          <div className="container pt-140 pb-110">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="about__img-3">
                  <img src={about1} alt="About Thumbnail" data-speed="auto" />
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title title-anim">Who We Are</h2>
                  <h3 className="sec-title title-anim">We are leading digital marketing agency.</h3>
                </div>
                <div className="sec-text-wrapper">
                  <div className="sec-text text-anim">
                    <p>We’re a team of strategic mdigital marketing working globally with largest brands, We believe
                      that
                      progress only happens when you refused to play things safe. We combine ideas and behaviors, and
                      insights with design, technological data to produce brand experiences that customers love our
                      services.</p>
                    <div className="btn_wrapper">
                      <a className="wc-btn-light btn-hover btn-item" href="about.html"><span></span> Explore Us
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
