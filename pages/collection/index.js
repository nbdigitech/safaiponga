import React from "react";
import Archive from "../../components/Archive";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Search from "../../components/PhotoPage/Search";
import CollectionHome from "../../components/CollectionPage/CollectionHome";
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <div className="lg:container px-[1rem] mx-auto ">
          <Search />
          <CollectionHome />
          <Archive />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
