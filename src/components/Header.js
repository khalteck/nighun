import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { currentPage, contact } = useAppContext();

  const [openMenu, setOpenMenu] = useState(false);
  function handleClick() {
    setOpenMenu((prevState) => !prevState);
  }

  //to close the dropdown after clicking a link
  const hideDropdown = () => {
    setOpenMenu(false);
  };

  //to show logout tray
  const [showLogout, setShowLogout] = useState(false);
  function toggleLogoutOn() {
    setShowLogout(true);
  }
  function toggleLogoutOff() {
    setShowLogout(false);
  }

  const [showDrop, setShowDrop] = useState(false);

  function toggleOnOff() {
    setShowDrop((prev) => !prev);
  }

  window.addEventListener("click", () => {
    setShowLogout(false);
  });

  return (
    <header>
      {/* desktop header */}
      <div
        className={`sm:w-full md:w-full top-0 bg-white lg:px-[15%] px-12 py-4 sm:py-0 fixed left-[50%] translate-x-[-50%] border-b border-slate-600 md:flex items-center z-[50] hidden transition-all duration-500`}
      >
        <Link to="/" className="mr-auto">
          <img alt="" src="/images/logo.png" className="w-28 h-20" />
        </Link>
        <nav className="flex items-center uppercase">
          <div className="flex items-center gap-3 lg:gap-8 mr-auto text-slate-700 text-[0.9rem]">
            <Link
              to="/"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/" && "bg-[#fec901]"
              } rounded-md hover:bg-[#fec901] hover:translate-y-[6px] transition-all duration-300`}
            >
              Home
            </Link>

            <div
              onMouseOut={toggleLogoutOff}
              onMouseOver={toggleLogoutOn}
              className="relative flex gap-1 items-center cursor-pointer px-2 py-1 rounded-md hover:bg-[#fec901] hover:translate-y-[6px] transition-all duration-300"
            >
              <div className={` whitespace-nowrap `}>UPS Products</div>
              <img
                alt=""
                src="/images/icons8-sort-down-50.png"
                className="w-3 h-3"
              />
              {showLogout && (
                <ul
                  onMouseOver={toggleLogoutOn}
                  onMouseOut={toggleLogoutOff}
                  className={`w-[200px] bg-white px-4 py-3 absolute top-[30px] left-[-20px] transition-all duration-500`}
                >
                  <Link to="/product/Compact%20home%20UPSs">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Compact Home UPSs
                    </li>
                  </Link>
                  <Link to="/product/Office%20&%20IT%20UPSs">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Office & IT UPSs
                    </li>
                  </Link>
                  <Link to="/product/Modular%20UPSs">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Modular UPSs
                    </li>
                  </Link>
                  <Link to="/product/Industrial%20UPSs">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Industrial UPSs
                    </li>
                  </Link>
                  <Link to="/product/Custom%20solutions">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Custom Solutions
                    </li>
                  </Link>
                  <Link to="/product/Switching%20systems">
                    <li className="border-b border-slate-600/40 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Switching Systems
                    </li>
                  </Link>
                  <Link to="/product/Software%20&%20communication">
                    <li className="py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                      Software & Communications
                    </li>
                  </Link>
                </ul>
              )}
            </div>
            <Link
              to="/about"
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/about" && "bg-[#fec901]"
              } rounded-md whitespace-nowrap hover:bg-[#fec901] hover:translate-y-[6px] transition-all duration-300`}
            >
              About us
            </Link>
            <div
              onClick={contact}
              className={`cursor-pointer px-2 py-1 ${
                currentPage === "/contact" && "bg-[#fec901]"
              } rounded-md hover:bg-[#fec901] hover:translate-y-[6px] transition-all duration-300`}
            >
              Contact
            </div>
            <div className="w-full flex gap-2 justify-center">
              <div className="w-8">
                <img
                  alt=""
                  src="/images/icons8-hungary-48.png"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-8">
                <img
                  alt=""
                  src="/images/icons8-nigeria-flag-48.png"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* mobile header */}
      <div
        className={`top-0 bg-white  md:hidden w-full h-[65px] px-6 fixed left-0 z-[100] border-b-[0px] border-b-[#47a3b3] flex justify-between items-center shadow-md transition-all duration-500`}
      >
        <Link to="/" className="mr-auto">
          <img alt="" src="/images/logo.png" className="w-16 h-auto" />
        </Link>
        <img
          alt="hamburger"
          src="/images/icons8-menu-30.png"
          className="w-[30px] h-[30px] cursor-pointer"
          onClick={handleClick}
        />

        {openMenu && (
          <div className="w-full h-[100vh] z-[200] bg-black/80 fixed top-0 left-0 lg:hidden">
            <img
              className="w-[30px] h-[30px] cursor-pointer mr-[25px] absolute top-[30px] right-[10px] text-white"
              alt=""
              src="/images/icons8-cancel-white-48.png"
              onClick={() => {
                setShowDrop(false);
                handleClick();
              }}
            />
            <div
              onClick={hideDropdown}
              className="w-[35%] h-full float-left bg-transparent"
            ></div>
            <ul className="slide float-right w-[65%] h-full bg-black/80 px-[30px] text-[1rem] text-white pt-[100px] uppercase">
              <li className="my-4">
                <Link to="/" onClick={hideDropdown}>
                  <div className="w-full">Home</div>
                </Link>
              </li>
              <li onClick={toggleOnOff} className="mt-4">
                <div className="w-full flex gap-2 items-center relative">
                  <div className="">UPS Products</div>
                  <img
                    alt=""
                    src="/images/icons8-sort-down-white-50.png"
                    className={`${
                      showDrop ? "rotate-180" : ""
                    } w-4 h-4 transition-all duration-500`}
                  />
                </div>
              </li>
              {showDrop && (
                <li className="transition-all duration-500">
                  <ul
                    className={`w-[200px] bg-transparent px-4 py-3 text-white text-[.85rem]`}
                  >
                    <Link to="/product/Compact%20home%20UPSs">
                      <li className="border-y border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Compact Home UPSs
                      </li>
                    </Link>
                    <Link to="/product/Office%20&%20IT%20UPSs">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Office & IT UPSs
                      </li>
                    </Link>
                    <Link to="/product/Modular%20UPSs">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Modular UPSs
                      </li>
                    </Link>
                    <Link to="/product/Industrial%20UPSs">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Industrial UPSs
                      </li>
                    </Link>
                    <Link to="/product/Custom%20solutions">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Custom Solutions
                      </li>
                    </Link>
                    <Link to="/product/Switching%20systems">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Switching Systems
                      </li>
                    </Link>
                    <Link to="/product/Software%20&%20communication">
                      <li className="border-b border-white/20 py-2 px-2 cursor-pointer hover:bg-[#fec901]/50">
                        Software & Communications
                      </li>
                    </Link>
                  </ul>
                </li>
              )}
              <li className="my-4">
                <Link to="/about" onClick={hideDropdown}>
                  <div className="w-full">About Us</div>
                </Link>
              </li>
              <li className="my-4">
                <Link
                  to="/"
                  onClick={(e) => {
                    contact(e);
                    hideDropdown();
                  }}
                >
                  <div className="w-full">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {/*mobile header */}
    </header>
  );
};

export default Header;
