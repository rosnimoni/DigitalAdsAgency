import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import logo_black from "../assets/imgs/logo-black.png";
import site_logo_white_2 from "../assets/imgs/site-logo-white-2.png";
import menu_black from "../assets/imgs/icon/menu-black.png"

const Header = () => {
  let device_width = window.innerWidth;
  useEffect(() => {
  // 03. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
      window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          scroll_top.style.display = "block";
        } else {
          scroll_top.style.display = "none";
        }
      };
  
      scroll_top.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });
    }
    /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 05. Header 1
  if (device_width < 1365) {
    let header_bg = document.querySelector(".header__area");

    if (header_bg) {
      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty('mix-blend-mode', 'unset');
          if (scroll_top) {
            scroll_top.style.display = "block";
          }
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty('mix-blend-mode', 'exclusion');
          if (scroll_top) {
            scroll_top.style.display = "none";
          }
        }
      };
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 06. Header 2
  let header_bg_2 = document.querySelector(".header__area-2");
  if (header_bg_2) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 07. Header 3
  let header_bg_3 = document.querySelector(".header__area-3");
  if (header_bg_3) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_3.classList.add("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_3.classList.remove("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 08. Header 5
  let header_bg_5 = document.querySelector(".header__area-5");
  if (header_bg_5) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_5.classList.add("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_5.classList.remove("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }

  },[]);

  return (
    <>
    {/* Go Top Button  */}
  <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>

      <header className="header__area-3">
        <div className="header__inner-3">
          <div className="header__logo-2">
            <a href="index.html" className="logo-dark">
              <img src={logo_black} alt="Logo" />
            </a>
            <a href="index.html" className="logo-light">
              <img src={site_logo_white_2} alt="Site Logo" />
            </a>
          </div>
          <div className="header__nav-2">
            <ul className="main-menu-3 menu-anim">
              <li className="has-megamenu">
                <a href="#">
                    <div className="menu-text"><span>h</span><span>o</span><span>m</span><span>e</span></div>
                </a>
                
                <ul className="mega-menu">
                  <li>
                    <div className="menu-heading">Agency</div>
                    <ul>
                      <li>
                        <a href="index.html">Digital Maketing</a>
                      </li>
                      <li>
                        <a href="index-2.html">Design Studio </a>
                      </li>
                      <li>
                        <a href="index-3.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="index-7.html">creative Agency</a>
                      </li>
                      <li>
                        <a href="index-6.html">Startup Agency</a>
                      </li>
                      <li>
                        <a href="index-8.html">modern agency</a>
                      </li>
                      <li>
                        <a href="index-4.html">personal Portfolio</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="menu-heading">Agency Dark</div>
                    <ul>
                      <li>
                        <a href="index-dark.html">Digital Maketing</a>
                      </li>
                      <li>
                        <a href="index-2-dark.html">Design Studio</a>
                      </li>
                      <li>
                        <a href="index-3-dark.html">Digital Agency</a>
                      </li>
                      <li>
                        <a href="index-7-dark.html">creative Agency</a>
                      </li>
                      <li>
                        <a href="index-6-dark.html">Startup Agency</a>
                      </li>
                      <li>
                        <a href="index-8-dark.html">modern agency</a>
                      </li>
                      <li>
                        <a href="index-4-dark.html">personal Portfolio</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="menu-heading">Portfolio</div>
                    <ul>
                      <li>
                        <a href="index-5.html">portfolio showcase</a>
                      </li>
                      <li>
                        <a href="index-10.html">showcase carousel</a>
                      </li>
                      <li>
                        <a href="index-12.html">Interactive link</a>
                      </li>
                      <li>
                        <a href="index-13.html">portfolio masonry</a>
                      </li>
                      <li>
                        <a href="index-14.html">vertical grid</a>
                      </li>
                      <li>
                        <a href="index-15.html">Interactive image slider</a>
                      </li>
                      <li>
                        <a href="index-16.html">showcase parallax</a>
                      </li>
                      <li>
                        <a href="index-17.html">logo showcase</a>
                      </li>
                      <li>
                        <a href="index-9.html">showcase slider</a>
                      </li>
                      <li>
                        <a href="index-11.html">Interactive hover showcase</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="menu-heading">Portfolio dark</div>
                    <ul>
                      <li>
                        <a href="index-5-dark.html">portfolio showcase</a>
                      </li>
                      <li>
                        <a href="index-10-dark.html">showcase carousel</a>
                      </li>
                      <li>
                        <a href="index-12-dark.html">Interactive link</a>
                      </li>
                      <li>
                        <a href="index-13-dark.html">portfolio masonry</a>
                      </li>
                      <li>
                        <a href="index-14-dark.html">vertical grid</a>
                      </li>
                      <li>
                        <a href="index-15-dark.html">
                          Interactive image slider
                        </a>
                      </li>
                      <li>
                        <a href="index-16-dark.html">showcase parallax</a>
                      </li>
                      <li>
                        <a href="index-17-dark.html">logo showcase</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className="menu-heading"></div>
                    <ul>
                      <li>
                        <a href="index-woocommerce.html">Home</a>
                      </li>
                      <li>
                        <a href="shop-full-width.html">shop - full width</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">shop - sidebar</a>
                      </li>
                      <li>
                        <a href="shop-single.html">product details</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index-woocommerce.html">
                <div class="menu-text"><span>w</span><span>o</span><span>o</span><span>c</span><span>o</span><span>m</span><span>e</span><span>r</span><span>c</span><span>e</span></div>
                </a>
                <ul className="main-dropdown">
                  <li>
                    <a href="index-woocommerce.html">Home</a>
                  </li>
                  <li>
                    <a href="#">shop</a>
                    <ul className="sub-dropdown">
                      <li>
                        <a href="shop-full-width.html">shop - full width</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">shop - sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-single.html">product details</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">cart</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">checkout</a>
                  </li>
                  <li>
                    <a href="sign-up.html">sign up</a>
                  </li>
                  <li>
                    <a href="sign-in.html">sign in</a>
                  </li>
                  <li>
                    <a href="password-reset.html">reset password</a>
                  </li>
                  <li>
                    <a href="woocomerce-category.html">product category</a>
                  </li>
                  <li>
                    <a href="account.html">Profile</a>
                  </li>
                </ul>
              </li>
              <li className="has-megamenu">
                <a href="about.html"><div class="menu-text"><span>P</span><span>a</span><span>g</span><span>e</span><span>s</span></div></a>
                <ul className="mega-menu">
                  <li>
                    <a>Service</a>
                    <ul>
                      <li>
                        <a href="service.html">service</a>
                      </li>
                      <li>
                        <a href="service-dark.html">service dark</a>
                      </li>
                      <li>
                        <a href="service-2.html">service V.2</a>
                      </li>
                      <li>
                        <a href="service-2-dark.html">service V.2 dark</a>
                      </li>
                      <li>
                        <a href="service-3.html">service V.3</a>
                      </li>
                      <li>
                        <a href="service-3-dark.html">service V.3 dark</a>
                      </li>
                      <li>
                        <a href="service-4.html">service V.4</a>
                      </li>
                      <li>
                        <a href="service-4-dark.html">service V.4 dark</a>
                      </li>
                      <li>
                        <a href="service-5.html">service V.5</a>
                      </li>
                      <li>
                        <a href="service-5-dark.html">service V.5 dark</a>
                      </li>
                      <li>
                        <a href="service-6.html">service V.6</a>
                      </li>
                      <li>
                        <a href="service-6-dark.html">service V.6 dark</a>
                      </li>
                      <li>
                        <a href="service-details.html">service details</a>
                      </li>
                      <li>
                        <a href="service-details-dark.html">
                          service details dark
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>portfolio</a>
                    <ul>
                      <li>
                        <a href="portfolio.html">portfolio</a>
                      </li>
                      <li>
                        <a href="portfolio-dark.html">portfolio dark</a>
                      </li>
                      <li>
                        <a href="portfolio-2.html">portfolio v.2</a>
                      </li>
                      <li>
                        <a href="portfolio-2-dark.html">portfolio v.2 dark</a>
                      </li>
                      <li>
                        <a href="portfolio-3.html">portfolio v.3</a>
                      </li>
                      <li>
                        <a href="portfolio-3-dark.html">portfolio v.3 dark</a>
                      </li>
                      <li>
                        <a href="portfolio-4.html">portfolio v.4</a>
                      </li>
                      <li>
                        <a href="portfolio-4-dark.html">portfolio v.4 dark</a>
                      </li>
                      <li>
                        <a href="portfolio-5.html">portfolio v.5</a>
                      </li>
                      <li>
                        <a href="portfolio-5-dark.html">portfolio v.5 dark</a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">portfolio details</a>
                      </li>
                      <li>
                        <a href="portfolio-details-dark.html">
                          portfolio details dark
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>team</a>
                    <ul>
                      <li>
                        <a href="team.html">Team</a>
                      </li>
                      <li>
                        <a href="team-dark.html">Team dark</a>
                      </li>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                      <li>
                        <a href="team-details-dark.html">Team Details dark</a>
                      </li>
                      <li>
                        <a href="career.html">career</a>
                      </li>
                      <li>
                        <a href="career-dark.html">career dark</a>
                      </li>
                      <li>
                        <a href="job-details.html">job details</a>
                      </li>
                      <li>
                        <a href="job-details-dark.html">job details dark</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>blog</a>
                    <ul>
                      <li>
                        <a href="blog.html">blog</a>
                      </li>
                      <li>
                        <a href="blog-dark.html">blog dark</a>
                      </li>
                      <li>
                        <a href="blog-2.html">blog v.2</a>
                      </li>
                      <li>
                        <a href="blog-2-dark.html">blog v.2 dark</a>
                      </li>
                      <li>
                        <a href="category.html">category</a>
                      </li>
                      <li>
                        <a href="category-dark.html">category dark</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                      <li>
                        <a href="blog-details-dark.html">blog details dark</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Others</a>
                    <ul>
                      <li>
                        <a href="about.html">about</a>
                      </li>
                      <li>
                        <a href="about-dark.html">about dark</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQs</a>
                      </li>
                      <li>
                        <a href="faq-dark.html">FAQs dark</a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                      <li>
                        <a href="contact-dark.html">contact dark</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="404-dark.html">404 dark</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="portfolio.html">
                <div class="menu-text"><span>s</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span></div>
                </a>
                <ul className="main-dropdown">
                  <li>
                    <a href="service.html">service</a>
                    <ul className="sub-dropdown">
                      <li>
                        <a href="service-dark.html">service dark</a>
                      </li>
                      <li>
                        <a href="service-2-dark.html">service V.2 dark</a>
                      </li>
                      <li>
                        <a href="service-3-dark.html">service V.3 dark</a>
                      </li>
                      <li>
                        <a href="service-4-dark.html">service V.4 dark</a>
                      </li>
                      <li>
                        <a href="service-5-dark.html">service V.5 dark</a>
                      </li>
                      <li>
                        <a href="service-6-dark.html">service V.6 dark</a>
                      </li>
                      <li>
                        <a href="service-details-dark.html">
                          service details dark
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="service-2.html">service V.2</a>
                  </li>
                  <li>
                    <a href="service-3.html">service V.3</a>
                  </li>
                  <li>
                    <a href="service-4.html">service V.4</a>
                  </li>
                  <li>
                    <a href="service-5.html">service V.5</a>
                  </li>
                  <li>
                    <a href="service-6.html">service V.6</a>
                  </li>
                  <li>
                    <a href="service-details.html">service details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="team.html">
                <div class="menu-text"><span>t</span><span>e</span><span>a</span><span>m</span></div>
                </a>
                <ul className="main-dropdown">
                  <li>
                    <a href="team.html">team</a>
                  </li>
                  <li>
                    <a href="team-details.html">team details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">
                <div class="menu-text"><span>b</span><span>l</span><span>o</span><span>g</span></div>
                </a>
                <ul className="main-dropdown">
                  <li>
                    <a href="blog.html">blog</a>
                  </li>
                  <li>
                    <a href="blog-2.html">blog v.2</a>
                  </li>
                  <li>
                    <a href="category.html">category</a>
                  </li>
                  <li>
                    <a href="blog-details.html">blog details</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header__nav-icon-3">
            <button className="search-icon" id="search_icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="search-icon" id="search_close">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button id="open_offcanvas">
              <img src={menu_black} alt="Menubar Icon" />
            </button>
          </div>
        </div>
      </header>

      <div className="header__search">
        <form action="#">
          <input type="text" name="s" id="s" placeholder="Search.." />
        </form>
      </div>
    </>
  );
};

export default Header;
