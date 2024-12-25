import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import arrow_down_sm from "../assets/imgs/icon/arrow-down-sm.png";
import hero3_img from "../assets/imgs/hero/1.jpg";
import hero_3 from "../assets/video/hero-3.mp4";
import gsap from "gsap"


const Header = () => {

  // gsap.registerPlugin(SplitText);
  
  // useEffect(() => {
  //   let tHero = gsap.timeline();

  //   let heading_title = new SplitText(".sec-title", { type: "chars" });
  //   let heading_char = heading_title.chars;

  //   tHero.from(heading_char, {
  //     rotate: 2,
  //     ease: "back.out",
  //     opacity: 0,
  //     duration: 3,
  //     stagger: 0.1,
  //   });
    
  // }, []);

  return (
    <>
      <section className="hero__area-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__inner-3">
                <div className="sec-title-wrapper">
                  <h2 className="sec-sub-title">Digital</h2>
                  <h3 class="sec-title title-left">
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      M
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      a
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      r
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      k
                    </div>
                  </h3>

                  <h3 class="sec-title title-right">
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      e
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      t
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      i
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      n
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        translate: "none",
                        scale: "none",
                        opacity: "1",
                        visibility: "inherit",
                        transform: "translate(0px, 0px)",
                      }}
                    >
                      g
                    </div>
                  </h3>
                </div>
                <div className="hero__text-3">
                  <p className="hero__text-animation">
                    Static and dynamic secure code review can prevent a day
                    before your product is even released. We can integrate with
                    your dev environment
                  </p>
                </div>
                <div className="scroll-down">
                  <button>
                    <img src={arrow_down_sm} alt="arrow icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="video-info">
            <div className="video-intro">
              <input id="video_check" type="checkbox" />
              <div className="intro-title">
                <h4 className="video-title">
                  Watch <span>video intro</span>
                </h4>
                <h4 className="video-title close-video-title">
                  Close <span>video intro</span>
                </h4>
              </div>
              <div className="video">
                <video src={hero_3} loop muted autoPlay playsInline></video>
              </div>
            </div>
          </div>
        </div>

        <div className="hero3-img-ani">
          <img src={hero3_img} alt="Hero Image" className="hero3-img" />
        </div>
      </section>
    </>
  );
};
export default Header;
