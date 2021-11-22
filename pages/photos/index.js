import React from "react";
import Archive from "../../components/Archive";
import Footer from "../../components/Footer";

import Navbar from "../../components/Navbar";
import Banner from "../../components/PhotoPage/Banner";
import PhotoHome from "../../components/PhotoPage/PhotoHome";
import Search from "../../components/PhotoPage/Search";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <Banner />
        <div className="lg:container px-[1rem] mx-auto ">
          <Search />
          <PhotoHome />
          <Archive />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
