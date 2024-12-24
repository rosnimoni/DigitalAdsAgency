import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import site_logo_white_2 from "../assets/imgs/site-logo-white-2.png"

const Footer = () => {
  return (
    <>
        <footer class="footer__area-3">
        <div class="footer__top-3">
          <div class="footer__top-wrapper-3">
            <div class="footer__logo-3 pt-120">
              <img src={site_logo_white_2} alt="Footer Logo" />
              <p>When do they work well, and when do they on us and finally, when do we actually need how can we avoid
                them.</p>
            </div>
            <div class="footer__social-3">
              <ul>
                <li><a href="#">facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
            <div class="footer__contact-3">
              <a class="end" href="contact.html">Let’s talk</a>
            </div>
          </div>
        </div>

        <div class="footer__btm-3">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4">
                <div class="footer__copyright-3">
                  <p>© 2022 - 2025 | Alrights reserved by <a href="https://wealcoder.com/" target="_blank">Wealcoder</a>
                  </p>
                </div>
              </div>
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                <div class="footer__nav-2">
                  <ul class="footer-menu-2 menu-anim">
                    <li><a href="about.html">about us</a></li>
                    <li><a href="contact.html">contact</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
