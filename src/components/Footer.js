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
          {/* <li className="w-[fit-content] mb-2 cursor-pointer hover:text-[#fec901]">
            <Link to="/contact">UPS Product</Link>
          </li> */}
        </ul>

        <ul className="mb-10 md:mb-0">
          <li className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Products
          </li>
          <Link to="/product/Compact%20home%20UPSs">
            <li className="hover:text-[#fec901] mb-2">Compact Home UPSs</li>
          </Link>
          <Link to="/product/Office%20&%20IT%20UPSs">
            <li className="hover:text-[#fec901] mb-2">Office & IT UPSs</li>
          </Link>
          <Link to="/product/Modular%20UPSs">
            <li className="hover:text-[#fec901] mb-2">Modular UPSs</li>
          </Link>
          <Link to="/product/Industrial%20UPSs">
            <li className="hover:text-[#fec901] mb-2">Industrial UPSs</li>
          </Link>
          <Link to="/product/Custom%20solutions">
            <li className="hover:text-[#fec901] mb-2">Custom Solutions</li>
          </Link>
          <Link to="/product/Switching%20systems">
            <li className="hover:text-[#fec901] mb-2">Switching Systems</li>
          </Link>
          <Link to="/product/Software%20&%20communication">
            <li className=" hover:text-[#fec901] mb-3">
              Software & Communications
            </li>
          </Link>
        </ul>

        <div className="text-start md:text-center mb-10 md:mb-0">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Contact us
          </h3>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/nighun/">
              <img
                alt=""
                src="/images/icon-linkedin.svg"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="https://wa.me/+36203510972">
              <img
                alt=""
                src="/images/icon-whatsapp.svg"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="tel:+36203510972">
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
          <p className="mb-5">
            No.1. Odemola Aramoko Shopping Complex, Cannan Estate, Sangotedo,
            Ajah, Lagos, Nigeria.
          </p>
          <p>
            H-1116 Budapest <br />
            Vegyesz utca 17-25, Hungary.
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
