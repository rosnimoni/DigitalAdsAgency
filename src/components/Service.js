import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const items = [
    {
      id: 1,
      title:"Search Engine ",
      opti:"Optimization",
      content:"We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
      logo:"+ Logo Design",
      Advertisement:"+ Advertisement",
      promotion:"+ Promotion",
      img: require("../assets/imgs/service/1.jpg"),
      
    },
    {
        id: 2,
        title:"Email ",
        opti:"Marketing",
        content:"We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
        logo:"+ Logo Design",
        Advertisement:"+ Advertisement",
        promotion:"+ Promotion",
        img: require("../assets/imgs/service/2.png"),

        
      },
      {
        id: 3,
        title:"Content ",
        opti:"Marketing",
        content:"We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
        logo:"+ Logo Design",
        Advertisement:"+ Advertisement",
        promotion:"+ Promotion",
        img: require("../assets/imgs/service/3.png"),
        
      },
      {
        id: 4,
        title:"Social ",
        opti:"Marketing",
        content:"We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.",
        logo:"+ Logo Design",
        Advertisement:"+ Advertisement",
        promotion:"+ Promotion",
        img: require("../assets/imgs/service/4.png"),
        
      },
  ];

const Service = () => {
  return (
   <>
    <section className="service__area-3 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="sec-title-wrapper pt-130 text-anim">
                  <h2 className="sec-sub-title title-anim">Services</h2>
                  <h3 className="sec-title title-anim">Our marketing <br /> Services</h3>
                  <p>Consumers today rely heavily on digital means to research products.
                    We
                    research a brand of bldend
                    engaging with it, according to the meanwhile, 51% of consumers say they use Google to research
                    products before buying.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xx-12">
                <div className="service__list-3">
                {items.map(function (data, i) {
                  return (
                    <div className="service__item-3 service_animation" key={i}>
                    <h3><a href="service-details.html" className="service__title-3">{data.title}<br />{data.opti}</a></h3>
                    <div className="service__content-3">
                      <p>{data.content}</p>
                      <ul className="">
                        <li>{data.logo}</li>
                        <li>{data.Advertisement}</li>
                        <li>{data.promotion}</li>
                      </ul>
                    </div>
                    <div className="service__btn-3">
                      <div className="btn_wrapper">
                        <a href="service-details.html" className="wc-btn-black btn-hover btn-item"><span></span> Details
                          <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>

                    <div className="service__hover-3" style={{ backgroundImage: `url(${data.img})`}}></div>
                  </div>
                  );
                })}

                  
                  <div className="service3__img-wrap">
                    <div className="service3__img"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
   </>
  )
  };
  export default Service;