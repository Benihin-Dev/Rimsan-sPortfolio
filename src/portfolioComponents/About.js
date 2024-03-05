import React, { useState, useEffect } from "react";
import profile from "../img/profile.png";
import { ReactTyped } from "react-typed";
import { RiFacebookFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { Link } from "react-scroll";

export default function About() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      const element1 = document.querySelector(".aboutUser");
      const element2 = document.querySelector(".profileImg");
      const element3 = document.querySelector(".profileImg2");

      element1.classList.remove("slideFromLeftAnimation");
      element2.classList.remove("slideFromRightAnimation");
      element3.classList.remove("slideFromRightAnimation");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  const [whatsappHover, setWhatsappHover] = useState(false);
  return (
    <div className="   w-11/12 sm:w-4/5 mx-auto mt-10 sm:mt-32 md:mt-16 lg:mt-0 sm:flex">
      <div className=" sm:hidden flex sm:w-1/2 px-16 sm:px-10 ">
        <img
          src={profile}
          className="profileImg slideFromRightAnimation object-contain"
          alt=""
        />
      </div>
      <div className="aboutUser slideFromLeftAnimation  sm:w-1/2 mt-10 lg:mt-0 flex px-4 md:px-5 lg:px-8">
        <div className=" mt-auto lg:pb-10 ">
          <div>
            <p className=" text-4xl sm:text-3xl text-gray-500 font-bold">
              Hi, I'm <span className=" text-[#773ec2]">Mohamed Rimsan</span>
            </p>
            <p className=" text-lg text-gray-500 font-bold">
              {/* Network Administrator */}
              <ReactTyped
                strings={["Network Administrator_", "Network Engineer_"]}
                typeSpeed={80}
                backSpeed={60}
                loop
              />
            </p>
            <p className=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              accusamus quisquam accusantium assumenda est quod.
            </p>
          </div>
          <div className=" text-xs flex gap-4 pt-5">
            <a href="https://drive.google.com/file/d/1R51vWWvUqaNhYh29qQqUNVX-78gOf-Mx/view?usp=sharing">
              <button className=" px-5 border rounded-md hover:bg-[#7c2ae8] bg-[#7846ba] text-white py-2">
                Download CV
              </button>
            </a>

            <button className=" px-5 text-[#7c2ae8] rounded-md border border-[#7c2ae8] hover:text-white hover:bg-[#7c2ae8] py-2">
              <Link
                to="project-section"
                smooth={true}
                duration={1200}
                spy={true}
                offset={-70}
              >
                See Projects
              </Link>
            </button>
          </div>
          <div
            className="mt-7 flex gap-5
          "
          >
            <a href="https://linkedin.com/in/mohamed-rimsan-967403288">
              <BiLogoLinkedin className="cursor-pointer border border-gray-900 hover:border-[#7c2ae8] size-7 rounded-full bg-[#7c2ae8] p-[4px]  text-gray-100" />
            </a>
            <a href="https://www.facebook.com/mohamed.rimzan.9250595?mibextid=ZbWKwL">
              <RiFacebookFill className="cursor-pointer border border-gray-900 hover:border-[#7c2ae8] size-7 rounded-full bg-[#7c2ae8] p-[4px]  text-gray-100" />
            </a>
            <div className=" relative">
              <PiWhatsappLogoBold
                onMouseEnter={() => {
                  setWhatsappHover(true);
                }}
                onMouseLeave={() => {
                  setWhatsappHover(false);
                }}
                onClick={() => {
                  setWhatsappHover(!whatsappHover);
                }}
                className=" cursor-pointer border border-gray-900 hover:border-[#7c2ae8] size-7 rounded-full bg-[#7c2ae8] p-[1px]  text-gray-100"
              />
              <div
                className={` ${
                  whatsappHover === true
                    ? " opacity-1 translate-x-0 "
                    : " opacity-0 -translate-x-2"
                } -z-10 absolute top-0 border border-[#7c2ae8]  duration-500    overflow-hidden pl-5 rounded-full  w-40  h-full flex  justify-center items-center`}
              >
                <p className=" text-sm"> +94 77 842 8878</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden sm:flex sm:w-1/2 px-16 sm:px-10">
        <img
          src={profile}
          className="profileImg2 slideFromRightAnimation object-contain "
          alt=""
        />
      </div>
    </div>
  );
}
