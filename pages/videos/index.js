import React from "react";
import Archive from "../../components/Archive";
import Footer from "../../components/Footer";
import Banner from "../../components/VideoPage/Banner";
import Navbar from "../../components/Navbar";
import Search from "../../components/PhotoPage/Search";
import VideoHome from "../../components/VideoPage/VideoHome";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Banner />
        <div className="lg:container px-[1rem] mx-auto ">
          <Search />
          <VideoHome />
          <Archive />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
