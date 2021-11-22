import Image from "next/image";
import { withRouter } from "next/router";
import React, { Component } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { MdPlayArrow } from "react-icons/md";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      status: "top",
    };

    this.listener = null;
  }

  drawer() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.state.isOpen)
        this.setState({ isOpen: false });
    });

    this.listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (this.state.status !== "scrolled") {
          this.setState({ status: "scrolled" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    return (
      <nav
        className="fixed top-0 left-0 right-0  z-50  shadow-lg"
        style={{
          backgroundColor: this.state.status === "top" ? "transparent" : "#fff",
          opacity: this.state.status === "top" ? 1 : 1,
        }}
      >
        <div className="w-full  ">
          <div className="flex  w-full items-center    ">
            <div className="flex w-full sm:justify-evenly justify-between  ">
              <div className="flex items-center sm:ml-0 ml-8">
                <a className="flex mb-4 md:mb-0">
                  <img
                    src="/assets/logo.png"
                    alt="logo"
                    className="w-32 my-2"
                  />
                </a>
              </div>

              <div className=" flex items-center  font-medium lg:text-lg md:text-base text-sm ">
                <Link href="/">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4 cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/" ? "#000" : "#464655",
                      fontWeight:
                        this.props.router.route === "/" ? "bold" : "normal",
                    }}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/photos">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/photos"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/photos"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Photos
                  </a>
                </Link>
                <Link href="/videos">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/videos"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/videos"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Videos
                  </a>
                </Link>
                <Link href="/documents">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/documents"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/documents"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Documents
                  </a>
                </Link>
                <Link href="/collection">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/collection"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/collection"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Collections
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/aboutus"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/aboutus"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    About Us
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="hidden sm:block lg:mr-8 mr-4  cursor-pointer"
                    style={{
                      color:
                        this.props.router.route === "/contactus"
                          ? "#000"
                          : "#464655",
                      fontWeight:
                        this.props.router.route === "/contactus"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Contact Us
                  </a>
                </Link>

                <div
                  className="ml-28  sm:hidden cursor-pointer"
                  onClick={() => this.drawer()}
                >
                  <RiBarChartHorizontalLine size={24} color="black" />
                </div>
              </div>
              {/* <div>
                <Link href="/">
                  <div className="hidden sm:block sm:ml-6 hover:text-[#FFD400] ">
                    <button className="flex my-4 items-center   focus:outline-none lg:text-lg md:text-base text-black">
                      Login / Register
                    </button>
                  </div>
                </Link>
              </div> */}
              <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
              >
                <div
                  style={{ display: this.state.isOpen ? "block" : "none" }}
                  className="z-10 fixed inset-0 transition-opacity md:hidden"
                >
                  <div
                    className="absolute inset-0 bg-black opacity-50"
                    tabIndex="0"
                  ></div>
                </div>
              </transition>
              <aside
                className="transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 "
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <span className="flex w-full justify-between p-4 border-b ">
                  <div>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                      <span className="ml-3 text-4xl font-bold"></span>
                      <span className="flex align-bottom mt-4 text-[#FFD400]">
                        <MdPlayArrow />
                      </span>
                    </a>
                  </div>
                  <div
                    className="absolute top-8 right-5  justify-center  flex items-center cursor-pointer "
                    onClick={() => this.drawer()}
                  >
                    <AiOutlineClose size={28} color="black" />
                  </div>
                </span>
                <Link href="/">
                  <span className="flex justify-center items-center p-2  text-xl  cursor-pointer">
                    <a
                      className=" ml-4 mr-6 cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/" ? "#000" : "#464655",
                        fontWeight:
                          this.props.router.route === "/" ? "bold" : "normal",
                      }}
                    >
                      Home
                    </a>
                  </span>
                </Link>
                <Link href="/photos">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/photos"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/photos"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      Photos
                    </a>
                  </span>
                </Link>
                <Link href="/videos">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/videos"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/videos"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      Videos
                    </a>
                  </span>
                </Link>
                <Link href="/documents">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/documents"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/documents"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      Documents
                    </a>
                  </span>
                </Link>
                <Link href="/collection">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/collection"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/collection"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      Collection
                    </a>
                  </span>
                </Link>
                <Link href="/aboutus">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/aboutus"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/aboutus"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      About Us
                    </a>
                  </span>
                </Link>{" "}
                <Link href="/contactus">
                  <span className="flex justify-center items-center p-2 font-semibold text-xl   cursor-pointer ">
                    <a
                      className=" ml-4 mr-6    cursor-pointer"
                      style={{
                        color:
                          this.props.router.route === "/contactus"
                            ? "#000"
                            : "#464655",
                        fontWeight:
                          this.props.router.route === "/contactus"
                            ? "bold"
                            : "normal",
                      }}
                    >
                      Contact Us
                    </a>
                  </span>
                </Link>
                {/* <Link href="/">
                  <div className="hover:text-[#FFD400]  flex justify-center">
                    <button className="inline-flex items-center   focus:outline-none text-xl ">
                      Login / Register
                    </button>
                  </div>
                </Link> */}
              </aside>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
