import * as UserReducers from "../lib/redux/user/reducers";

import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
import { BsMessenger, BsSkype, BsTwitter, BsVimeo } from "react-icons/bs";
import { useEffect, useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import { GiRss } from "react-icons/gi";
import { IoInformationOutline } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";
import { menus } from "../configs/menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showTopMenu, setShowTopMenu] = useState(false);
  const loginSuccess = useSelector(UserReducers.loginSuccess);
  const handleScroll = () => {
    const bottomHeader = document.querySelector(".header-section");
    const y = window.scrollY > 200;

    if (bottomHeader) {
      if (y && !bottomHeader.classList.contains("header-fixed")) {
        bottomHeader.classList.add("header-fixed", "fadeInUp");
      } else if (!y && bottomHeader.classList.contains("header-fixed")) {
        bottomHeader.classList.remove("header-fixed", "fadeInUp");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const openSubMenu = (index: number) => {
    const el = document.querySelector(`.has-children-${index}`);
    if (el) {
      el.classList.toggle("active");
    }
  };
  return (
    <>
      <header className="header header-section" id="header-main">
        <div
          className={`top-header bg-primary plg:bg-transparent ${
            showTopMenu ? "active" : ""
          }`}
        >
          <div
            className={`top-header-container text-white plg:text-grey flex flex-col plg:flex-row items-center justify-between px-3.75 plg:px-6.25 border-b border-b-primary`}
          >
            <div className="tab-header-top-left border border-[rgba(255,255,225,0.1)] plg:border-0 w-full sm:max-w-[540px] md:max-w-[720px] justify-center plg:justify-between flex items-center ">
              <Link
                className="tbl-phone flex-grow justify-center flex items-center px-[15px] py-[15px] plg:py-[15px] plg:px-[25px] plg:border-r border-r-[rgba(16,17,21,0.1)]"
                to="tel:0919538433"
              >
                <AiFillPhone size={16} />
                <span className="ml-[5px]">0818123593</span>
              </Link>
              <span className="tbl-phone flex-grow flex items-center justify-center px-[15px] py-[15px] plg:py-[15px] plg:px-[25px]">
                <CiLocationOn size={16} />
                <a href="https://maps.app.goo.gl/cGfhjeEvjTP9NwUw6" className="ml-[5px]">HUST - Hanoi, Vietnam</a>
              </span>
            </div>
            <div className="tab-header-top-right flex items-center justify-center w-full sm:max-w-[540px] md:max-w-[720px] ">
              <div className="flex items-center gap-3">
                <span className="text-white plg:text-grey">Find us on: </span>
                <div className="flex items-center text-white plg:text-primary ">
                  <Link
                    className="w-[50px] h-[50px] flex items-center justify-center"
                    to="https://www.facebook.com/choidong.ki.9/"
                  >
                    <BsMessenger size={16} />
                  </Link>
                  <Link
                    className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-mobile plg:border-l-primary"
                    to="https://www.facebook.com/dhbkhanoi"
                  >
                    <BsTwitter size={16} />
                  </Link>
                  <Link
                    className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-mobile plg:border-l-primary"
                    to="https://www.facebook.com/dhbkhanoi"
                  >
                    <BsVimeo size={16} />
                  </Link>
                  <Link
                    className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-mobile plg:border-l-primary"
                    to="https://www.facebook.com/dhbkhanoi"
                  >
                    <BsSkype size={16} />
                  </Link>
                  <Link
                    className="w-[50px] h-[50px] flex items-center justify-center ml-[5px] border-l border-l-mobile plg:border-l-primary"
                    to="https://www.facebook.com/ctsv.hust.edu.vn"
                  >
                    <GiRss size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="bottom-header-container realtive px-6.25  flex items-center justify-center backdrop-blur-[20px] bg-blur">
            <div className="relative flex items-center justify-between py-5 w-full sm:max-w-[540px] md:max-w-[720px] plg:max-w-full">
              <div className="logo-left max-h-[52px]">
                <Link className="inline-block w-60 " to="/">
                  <img src="/assets/image/logo.png" alt="logo" />
                </Link>
              </div>
              <nav className="menu-right flex items-center gap-[30px]">
                <ul
                  className={`list-menu flex items-center ${
                    showMenu ? "active" : ""
                  }`}
                >
                  {menus.map((e, i) => {
                    const subMenu = e.subMenu.length > 0 ? e.subMenu : null;
                    return (
                      <li
                        key={i}
                        className={`menu-item relative ${
                          subMenu
                            ? `menu-item-has-children has-children-${i}`
                            : ""
                        }`}
                        onClick={() => openSubMenu(i)}
                      >
                        <Link
                          to={e.link}
                          className={`capitalize text-base py-3.75 px-5.5 realtive font-bold text-black ${
                            subMenu
                              ? "before:absolute before:top-1/2 before:-translate-y-1/2 after:absolute before:h-[10px] before:w-0.5 before:right-1 after:bottom-1/2 after:w-[10px] after:h-0.5 after:translate-y-1/2 after:bg-black before:bg-black after:right-0"
                              : ""
                          } `}
                        >
                          {e.title}
                        </Link>
                        {subMenu && (
                          <ul className="menu-list-item-of-children absolute">
                            {subMenu.map((v, j) => (
                              <li
                                className="menu-item-of-children text-black hover:bg-primary hover:text-white"
                                key={`m${j}`}
                              >
                                <Link to={v.link}>{v.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {loginSuccess ? (
                  <Link to={"/profile"}>
                    <img
                      src="/public/assets/image/ava-author.jpg"
                      className="rounded-full"
                    />
                  </Link>
                ) : (
                  <div className="wrapper-button-account flex items-center text-base">
                    <button
                      className="login hidden md:flex gap-1 items-center uppercase rounded-tl-[2px] rounded-bl-[2px] text-primary p-[10px] md:p-3.75 bg-white"
                      type="button"
                      name="btnLogin"
                      data-test="login-test"
                      onClick={() => navigate('/login')}
                    >
                      <AiOutlineUser size={16} />
                      <span className="">Login</span>
                    </button>
                    <button
                      className="signup hidden md:flex gap-1 items-center uppercase rounded-tr-[2px] rounded-br-[2px] bg-primary text-white p-[10px] md:p-3.75"
                      type="button"
                      name="btnSignup"
                      data-test="signup-test"
                      onClick={() => navigate('/sign-up')}
                    >
                      <IoIosPeople size={16} />
                      <span className="">Sign Up</span>
                    </button>
                    <div className="flex items-center plg:hidden">
                      <div
                        className={`header-bar relative ml-[30px] w-[25px] h-5 ${
                          showMenu ? "active" : ""
                        }`}
                        role="button"
                        onClick={() => setShowMenu((prevState) => !prevState)}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div
                        className="info-show-top-header ml-5 bg-primary w-5 h-5 flex justify-center items-center rounded-sm"
                        role="button"
                        onClick={() => setShowTopMenu((prev) => !prev)}
                      >
                        <IoInformationOutline className="text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
