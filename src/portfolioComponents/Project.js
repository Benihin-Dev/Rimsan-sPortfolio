import React from "react";
import { useInView } from "react-intersection-observer";
import smartPot from "../img/pot.png";
import eduHub from "../img/eduHub.jpg";
import doner from "../img/doner.png";

export default function Project() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  return (
    <div className={` w-11/12 sm:w-4/5 sm:px-8 mx-auto`}>
      <h1 className=" font-medium text-gray-500 ">
        | My Projects <span className=" text-[#773ec2]">Works</span>
      </h1>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } pt-10 grid px-10 sm:grid-cols-3 gap-5 w-full`}
      >
        <div
          className={` relative proParent shadow-md hover:shadow-[#773ec266] border border-gray-400 rounded-md overflow-hidden`}
        >
          <div className="proChild absolute pb-2 px-2 top-[25%] border-y border-gray-500 left-0 bg-[#ffffffbc]  w-full">
            <h1 className=" w-full  text-center text-purple-700  text-sm my-1 font-semibold">
              Smart Pot{" "}
              <span className=" text-xs text-gray-500">- July 2023</span>
            </h1>
            <p className=" text-xs font-medium text-gray-500 text-center">
              It’s based on automatically watering a plant if the soil’s
              moisture goes down under a particular reading. We used a soil
              moisture sensor to monitor the moisture of the soil.
            </p>
          </div>
          <div className=" w-full mx-auto">
            <img src={smartPot} alt="" className=" object-contain" />
          </div>
        </div>
        <div
          className={` relative proParent shadow-md hover:shadow-[#773ec266] border border-gray-400 rounded-md overflow-hidden`}
        >
          <div className="proChild absolute pb-2 px-2 top-[25%] border-y border-gray-500 left-0 bg-[#ffffffbc] w-full">
            <h1 className=" w-full  text-center text-purple-700  text-sm my-1 font-semibold">
              Donor <span className=" text-xs text-gray-500">- Dec 2023</span>
            </h1>
            <p className=" text-xs font-medium text-gray-500 text-center">
              Donor is a web application for blood donation. It's a platform
              that connects people willing to help each other in blood. People
              can give or receive blood as a recipient or a donor.
            </p>
          </div>
          <div className=" w-full  mx-auto">
            <img src={doner} alt="" className=" object-contain" />
          </div>
        </div>
        <div
          className={` relative proParent shadow-md hover:shadow-[#773ec266] border border-gray-400 rounded-md overflow-hidden`}
        >
          <div className="proChild absolute pb-2 px-2 top-[25%] leading-[10px] border-y border-gray-500 left-0 bg-[#ffffffbc]  w-full">
            <h1 className=" w-full  text-center text-purple-700  text-sm my-1 font-semibold">
              Edu-Hub
              <span className=" text-xs text-gray-500"> - Sep 2023</span>
            </h1>
            <p className=" text-xs font-medium text-gray-500 text-center">
              It is a web application for classroom management. It was developed
              to manage classroom student details and all activities, including
              progress reports. We used HTML, CSS, MYSQL, and PHP.
            </p>
          </div>
          <div className=" w-full  mx-auto">
            <img src={eduHub} alt="" className=" object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
