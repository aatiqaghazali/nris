import React, { useState } from "react";
import "./index.css";
import logo from "../../../assets/imgs/logo/logo_header.svg";
import { MdPhone, MdMenu, MdClose } from "react-icons/md";
import { AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";

export function PrimaryNavbar(props) {
  const activeLink =
    "block bg-[#E78F00] text-[#FFFFFF] rounded-full px-5 py-1 font-bold ";
  const normalLink = "block  text-[#FFFFFF]  ";
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <nav className="flex items-center justify-between flex-wrap lg:px-20 px-5 md:py-3  border-y-[0.5px] border-[#FFFFFF] ">
    

      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="logo NRIS" className=" w-20 md:w-full"></img>
      </div>
      <div class=" hidden    md:flex md:justify-end md:items-end w-auto px-6  font-Inria md:space-x-6  ">
        <div className="flex justify-center items-center text-white space-x-2">
          <span>
            <img
              src={require(`../../../assets/imgs/icons/email.svg`).default}
              alt="register icon "
            ></img>
          </span>
          <span>
            <p className=" text-lg font-[400]">info@nris.com</p>
          </span>
        </div>
        <div className="flex justify-center items-center text-white space-x-2">
          <span>
            <MdPhone fontSize={25}></MdPhone>
          </span>
          <span>
            <p className=" text-lg font-[400]">844.435.7674</p>
          </span>
        </div>
        {/*================================================ START SELECT STATE FIELDS COMBINED========================================================= */}
        <div className="  rounded border-[0.25px] border-[#FFFFFF]    text-white  ">
          <select name="country" id="country" className="bg-black">
            <option>USA</option>
            <option>India</option>
          </select>
          <select
            name="country"
            className="bg-[#7C7C7C] rounded px-3 mr-0 w-40 "
          >
            <option>Select State...</option>
            <option>New York</option>
            <option>Gorgea</option>
          </select>
        </div>
        {/*================================================ END SELECT STATE FIELDS COMBINED========================================================= */}

        <div className="flex justify-center items-center text-white space-x-2">
          <span>
            <img
              src={require(`../../../assets/imgs/icons/register.svg`).default}
              alt="register icon "
              className=""
            ></img>
          </span>
          <span>
            <p className=" text-lg font-[400]">Register</p>
          </span>
        </div>

        <div className="flex justify-center items-center text-white space-x-2">
          <span>
            <AiOutlineLogin fontSize={25}></AiOutlineLogin>
          </span>
          <span>
            <p className=" text-lg font-[400]">Login</p>
          </span>
        </div>
      </div>
      <div className="md:hidden">
        {/*================================================ START SELECT STATE FIELDS COMBINED========================================================= */}
        <div className="rounded border-2 border-[#FFFFFF] m-1 md:px-2 text-white ">
          <select name="country" className="bg-black md:text-sm text-xs">
            <option>USA</option>
            <option>India</option>
          </select>
          <select name="country" className="bg-[#7C7C7C] rounded px-3 mr-0 md:text-sm text-xs  ">
            <option>Select State...</option>
            <option>India</option>
          </select>
        </div>
        {/*================================================ END SELECT STATE FIELDS COMBINED========================================================= */}
      </div>
      <div
        className="toggle cursor-pointer md:hidden flex  relative top-0 "
        onClick={handleToggle}
      >
        {toggle ? (
          <MdClose color="white" fontSize={30}></MdClose>
        ) : (
          <MdMenu color="white" fontSize={30}></MdMenu>
        )}

        {toggle && (
          <div className="bg-black navigation flex flex-col    text-white z-50 p-6 justify-start items-start ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "    mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4"
              }
            >
              Our Pages
            </NavLink>

            <NavLink
              to={"/GPS-SOLUTIONS"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              NRIS
            </NavLink>
            <NavLink
              to={"thermal-camera"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Talk Forum Blog
            </NavLink>
            <NavLink
              to={"/About"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Real Estate
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Car Pool
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Autos
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Education & Teaching
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Movies / Videos
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Free Ads
            </NavLink>
            <NavLink
              to={"/Contact"}
              className={({ isActive }) =>
                (isActive ? activeLink : normalLink) +
                "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
              }
            >
              Student Talk
            </NavLink>
            <div className="primary-menu-mobile flex flex-col    text-white py-3 justify-start items-start">
              <div className="flex justify-center items-center text-white space-x-2  mt-3 ">
                <span>
                  <img
                    src={
                      require(`../../../assets/imgs/icons/email.svg`).default
                    }
                    alt="register icon "
                  ></img>
                </span>
                <span>
                  <p className=" text-lg font-[400]">info@nris.com</p>
                </span>
              </div>
              <div className="flex justify-center items-center text-white space-x-2 mt-3">
                <span>
                  <MdPhone fontSize={25}></MdPhone>
                </span>
                <span>
                  <p className=" text-lg font-[400]">844.435.7674</p>
                </span>
              </div>
              <div className="flex justify-center items-center text-white space-x-2 mt-3">
                <span>
                  <img
                    src={
                      require(`../../../assets/imgs/icons/register.svg`).default
                    }
                    alt="register icon "
                    className=""
                  ></img>
                </span>
                <span>
                  <p className=" text-lg font-[400]">Register</p>
                </span>
              </div>

              <div className="flex justify-center items-center text-white space-x-2 mt-3">
                <span>
                  <AiOutlineLogin fontSize={25}></AiOutlineLogin>
                </span>
                <span>
                  <p className=" text-lg font-[400]">Login</p>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function SecondaryNavbar(props) {
  const activeLink =
    "block bg-[#E78F00] text-[#FFFFFF] rounded-full px-5 py-1 font-bold ";
  const normalLink = "block  text-[#FFFFFF]  ";
  return (
    <nav className="hidden md:flex justify-center items-center font-[400] text-[15px] space-x-4 px-10 py-5 font-Poppins">
      <NavLink
        to="/"
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "    mt-4 lg:inline-block lg:mt-0  hover:text-gray-500 mr-4"
        }
      >
        Our Pages
      </NavLink>

      <NavLink
        to={"/GPS-SOLUTIONS"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        NRIS
      </NavLink>
      <NavLink
        to={"thermal-camera"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Talk Forum Blog
      </NavLink>
      <NavLink
        to={"/About"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Real Estate
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Car Pool
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Autos
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Education & Teaching
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Movies / Videos
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Free Ads
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          (isActive ? activeLink : normalLink) +
          "block mt-4  lg:inline-block lg:mt-0 text-white-900  hover:text-gray-500"
        }
      >
        Student Talk
      </NavLink>
    </nav>
  );
}
