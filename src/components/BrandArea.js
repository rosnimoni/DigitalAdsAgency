import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const items = [
  {
    id: 1,
    img: require("../assets/imgs/brand/1.png"),
  },
  {
    id: 2,
    img: require("../assets/imgs/brand/2.png"),
  },
  {
    id: 3,
    img: require("../assets/imgs/brand/3.png"),
  },
  {
    id: 4,
    img: require("../assets/imgs/brand/4.png"),
  },
  {
    id: 5,
    img: require("../assets/imgs/brand/5.png"),
  },
  {
    id: 6,
    img: require("../assets/imgs/brand/6.png"),
  },
];
const BrandArea = () => {
  return (
    <>
      <section className="brand__area">
        <div className="container pt-140 pb-140">
          <div className="row">
            <div className="col-xxl-12">
              <h2 className="brand__title-3 title-anim">
                We worked with global largest brands
              </h2>
              <div className="brand__list-3">
                {items.map(function (data, i) {
                  return (
                    <div className="brand__item-2 fade_bottom" key={i}>
                      <img src={data.img} alt="Brand Logo" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
