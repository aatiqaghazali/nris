import React from "react";
import "./index.css";
import { PrimaryNavbar, SecondaryNavbar } from "../commons/Navbar";
import tolet from "../../assets/imgs/header_tolet_section_main.png";
import tolet_dummy from "../../assets/imgs/tolet_dummy.png";
import bottom_logos from "../../assets/imgs/bottom-logos.png";

import SearchSection from "../SearchSection/index";
export default function index() {
  return (
    <header className="header">
      <article>
        <PrimaryNavbar></PrimaryNavbar>
        <SecondaryNavbar></SecondaryNavbar>
      </article>
      {/*================================================Middle Section Header=============================================== */}
      <article className="header_middle_content grid md:grid-cols-2 place-items-center place-content-center p-10">
        {/*================================================Left Section Header=============================================== */}

        <div className="header_left_content space-y-4">
          <article className="bg-[#8AB9FF] rounded-full px-3 flex justify-center text-center items-center w-fit">
            <p className="font-poppins py-1 md:text-sm text-xs">
              You are in NewYork Home Page
            </p>
          </article>
          <article className="header_left_content main_text font-Montserrat text-white">
            <p className="md:text-2xl sm:text-lg text-medium uppercase tracking-wide">
              Explore in{" "}
              <span className="text-[#00FFA3] font-semibold lg:ms-3">
                Newyork
              </span>
            </p>
          </article>

          <article className="font-Montserrat text-white">
            <h3 className="font-[900] md:text-6xl text-3xl leading-[1.25]">
              What's <br></br> happening in{" "}
              <span className="text-[#00FFA3]">Newyork?</span>
            </h3>
          </article>
        </div>
        {/*================================================Right Section Header=============================================== */}

        <article className="header_right_content space-y-4 md:w-96 w-full flex flex-col justify-center ">
          <SearchSection></SearchSection>
        </article>
      </article>
              {/*================================================Bottom Section Header=============================================== */}
<section>
  <div className="tolet-section  bg-[#D9D9D9] lg:overflow-hidden overflow-x-scroll ">
    <div className="flex space-x-1">
    <img src={tolet} alt='tolet img nris' className=" m-0 p-0 md:w-[820px] md:h-[150px]"></img>
    <img src={tolet_dummy} alt='tolet img nris' className=" m-0 p-0 md:w-[130px]   h-[150px]"></img>
    <img src={tolet_dummy} alt='tolet img nris' className=" m-0 p-0 md:w-[130px]   h-[150px]"></img>
    <img src={tolet_dummy} alt='tolet img nris' className=" m-0 p-0 md:w-[130px]   h-[150px]"></img>
   
    </div>
    <div className="flex justify-center items-center w-full px-36 py-2 ">
    <img src={bottom_logos} alt='tolet img nris' className=" m-0 p-0 "></img>
    </div>
   
  </div>
</section>
    </header>
  );
}
