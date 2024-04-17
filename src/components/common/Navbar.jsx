import React, { useEffect, useRef, useState } from "react";
import { headerItems } from "../../data/headerItems";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  function matchRoute(route) {
    return matchPath({ path: route }, location.pathname);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowMenu(false); // Close the menu if screen size is medium or larger
    }
  };

  // Effect to add resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="flex flex-col justify-center gap-2 border-b-2 border-b-PGreen">
      {/* image */}
      <div className=" md:pb-8 flex md:gap-2 justify-between items-center md:justify-center">
        <img
          src={logo}
          loading="lazy"
          className=" items-center border-white md:w-[120px] md:h-[120px] w-[60px] h-[60px]"
        />
        <p className="brand-heading md:block hidden font-bold text-4xl">
          maytra
        </p>
        <div
          className={` flex top-0 justify-end md:hidden w-full p-3 text-4xl ${
            showMenu ? "hidden" : "block"
          }`}
        >
          <FiMenu className="text-black " onClick={toggleMenu} />
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex justify-between items-center md:justify-center">
        {/* Menu icon for small screens */}

        {/* Dropdown menu */}
        {showMenu && (
          <div
            ref={menuRef}
            className={`absolute z-50 translate-y-10  right-0 mt-2 w-48 bg-PGreen text-white rounded-lg shadow-lg py-2 px-2`}
          >
            <ul>
              {headerItems.map((data) => (
                <li key={data.id} className="">
                  <Link to={data?.link}>
                    <p
                      className={`capitalize text-[24px] ${
                        matchRoute(data?.link)
                          ? " text-PBlue font-semibold"
                          : "text-PBlue"
                      } hover:scale-95 hover:text-PGray cursor-pointer transition-all duration-200`}
                    >
                      {data.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main navigation */}
        <ul className={`md:flex md:flex-row md:gap-x-12 hidden`}>
          {headerItems.map((data) => (
            <li key={data.id} className="menu-item">
              <Link to={data?.link}>
                <p
                  className={`capitalize text-[24px] ${
                    matchRoute(data?.link)
                      ? " text-PBlue font-semibold"
                      : "text-black"
                  } hover:scale-95 hover:text-PBlue cursor-pointer transition-all duration-200`}
                >
                  {data.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
