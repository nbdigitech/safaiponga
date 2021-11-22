import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/HomePage/Banner";
import DocumentSlider from "../components/HomePage/DocumentSlider";
import Essentials from "../components/HomePage/Essentials";
import Slider from "../components/HomePage/Slider";
import VideoSlider from "../components/HomePage/VideoSlider";
import Navbar from "../components/Navbar";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Banner />
        <div className="lg:container px-[2rem] mx-auto ">
          <Essentials />
          <Slider />
          <VideoSlider />
          <DocumentSlider />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
