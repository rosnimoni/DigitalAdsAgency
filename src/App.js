import React, { useEffect } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'font-awesome/css/font-awesome.min.css';
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import OffCanvasArea from "./components/OffCanvasArea"; 
import BrandArea from "./components/BrandArea"; 
import AboutArea from "./components/About"; 
import Service from "./components/Service" 
import Footer from "./components/Footer" 
//import TopBehaviorArea from "./components/TopBehaviorArea" 

function App() {

  return (
    <>
    
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <OffCanvasArea/>
            <HeroArea />
            <BrandArea />
            <AboutArea />
            <Service />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
