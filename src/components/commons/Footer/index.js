import React from "react";
import "./index.css";
import {BiLogoFacebookSquare , BiLogoInstagram, BiLogoTwitter, BiLogoYoutube} from 'react-icons/bi'
export default function index() {
  return (
    <footer className=" font-Josefin">
      <div className="container flex flex-col justify-start md:px-20 px-2 py-10">
        <div>
          <img
            src={require("../../../assets/imgs/logo/logo_header.svg").default}
            alt="logo nris"
          ></img>
        </div>
        <div>
          <p className="text-[#888888] text-xs font-Josefin py-10">
            NRIS.COM is one of the premier NRI websites that provides a range of
            resourceful services to Indian expats residing in the USA. Visiting
            the site you will find comprehensive information related to
            restaurants, casinos, pubs, temples, carpool, movies, education,
            real estate, and forums. The simple and easy to navigate format
            allows NRIs to gain information within a fraction of a second.
            Moreover, advertising through its column of Indian free classifieds
            in USA allow businesses to improve visibility of their brand.
          </p>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-[40%,60%] ">
            <div className="container">
              <h3 className=" uppercase font-[700] tracking-[5px]">
                Quick Link
              </h3>
              <div className="lists grid grid-cols-3 font-[400] py-5">
                <ul class="list-disc  py-1 ">
                  <li className="text-sm">About Us</li>

                  <li className="text-sm">Terms & Conditions</li>
                </ul>
                <ul class="list-disc py-1">
                  <li className="text-sm">Privacy</li>

                  <li className="text-sm">Disclaimer</li>
                </ul>
                <ul class="list-disc py-1">
                  <li className="text-sm">Advertise</li>
                  <li className="text-sm">Contact</li>
                </ul>
              </div>
            </div>
            <div className="container">
              <h3 className=" uppercase font-[700] tracking-[5px]">
                CONTACT INFO
              </h3>
              <div className="lists grid lg:grid-cols-3 font-[400] py-5 space-x-4">
                <ul class="  py-1 ">
                  <li className="text-sm">Partnership enquiries contact us at</li>

                  <li className=" text-footerHighlights-0">Info@nris.com</li>
                </ul>
                <ul class=" py-1">
                  <li className="text-sm">Business Enquiries contact us at</li>

                  <li className=" text-footerHighlights-0">contact@nris.com</li>
                </ul>
                <ul className="py-1 px-2">
                    <li>  <div className="container flex space-x-8 ">
           
           <BiLogoFacebookSquare fontSize={30}></BiLogoFacebookSquare>
           <BiLogoInstagram fontSize={30}></BiLogoInstagram>
           <BiLogoTwitter fontSize={30}></BiLogoTwitter>
           <BiLogoYoutube fontSize={30}></BiLogoYoutube>
         </div></li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
        <div>
            <p className="text-[15px]">copyright © 2023 nris.com</p>
        </div>
      </div>
    </footer>
  );
}
