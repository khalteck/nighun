import { Link } from "react-router-dom";

const Footer = ({ id }) => {
  return (
    <footer
      id={id}
      className="w-full bg-[#262727] pt-[50px] text-[1rem] text-slate-300"
    >
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
        <ul className="w-[fit-content] mb-10 md:mb-0">
          <li className="mb-4">
            <div className="flex items-center">
              <div className="bg-white rounded-lg">
                <img
                  alt="logo"
                  src="/images/logo.png"
                  className="w-[50px] h-[30px] rounded-lg"
                />
              </div>
              <p className="font-[700] tracking-wider text-[1.2rem] ml-2">
                NIGHUN
              </p>
            </div>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-[#fec901]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-[#fec901]">
            <Link to="/contact">UPS Product</Link>
          </li>
        </ul>

        <ul className="mb-10 md:mb-0">
          <li className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Terms of use
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-[#fec901]">
            <Link to="/privacy-policy">Privacy policy</Link>
          </li>
        </ul>

        <div className="text-start md:text-center mb-10 md:mb-0">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Contact us
          </h3>
          <div className="flex gap-3">
            <a href="##">
              <img
                alt=""
                src="/images/icon-linkedin.svg"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="##">
              <img
                alt=""
                src="/images/icon-whatsapp.svg"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="##">
              <img
                alt=""
                src="/images/icon-phone-png"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-[300px] lg:w-[500px]">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Address
          </h3>
          <p>
            No.1. Odemola Aramoko Shopping Complex, Cannan Estate, Sangotedo,
            Ajah, Lagos.
          </p>
        </div>
      </div>
      <div className="w-full h-[80px] flex justify-center items-center text-[0.75rem] border-t border-slate-700 text-[#fec901]  ">
        Copyright © 2023 All Rights Reserved By NIGHUN
      </div>
    </footer>
  );
};

export default Footer;
