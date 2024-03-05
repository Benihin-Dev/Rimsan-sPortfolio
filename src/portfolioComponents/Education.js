import React from "react";
import { useInView } from "react-intersection-observer";
import Esoft from "../img/esoft.jpg";
import UniImg from "../img/Uni.png";

export default function Education() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className=" w-11/12 sm:w-4/5 mx-auto my-20 p-5 sm:p-10">
      <div>
        <h1 className=" w-full text-end px-2 font-semibold text-gray-500">
          | Education <span className="text-[#773ec2]"> Info</span>
        </h1>
        <div className=" pt-10 grid  sm:grid-cols-3 gap-5 w-full">
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            } eduParent shadow-md hover:shadow-lg border border-gray-300 rounded-md   overflow-hidden relative`}
          >
            <div className=" w-full mx-auto">
              <img src={UniImg} alt="" className=" object-contain" />
            </div>

            <div className="eduChild absolute pb-2 px-2 top-0 left-0 bg-[#ffffffb8] w-full">
              <h1 className=" w-full  text-center text-xs my-1 font-semibold">
                Bachelor in Information Communication Technology Honors (R)
              </h1>
              <p className=" text-xs text-gray-500 text-center">
                <span className=" font-medium">
                  {" "}
                  University of Sri Jayewardenepura
                </span>{" "}
                <br /> Current GPA 3.34 (2021 - 2025 )
              </p>
            </div>
          </div>
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            } eduParent shadow-md border border-gray-300 rounded-md hover:shadow-lg  overflow-hidden relative`}
          >
            <div className=" w-full mx-auto">
              <img src={Esoft} alt="" className=" object-contain" />
            </div>
            <div className="eduChild absolute py-3 px-2 top-0 left-0 bg-[#ffffffb8] w-full">
              <h1 className=" w-full  text-center text-xs my-1 font-semibold">
                Diploma in Information Technology
              </h1>
              <p className=" text-xs text-gray-500 text-center">
                <span className=" font-medium"> ESOFT Metro Campus </span>
                <br />- October 2020 -
              </p>
            </div>
          </div>
          <div
            ref={ref}
            className={`animated-component ${
              inView ? "is-visible" : ""
            } eduParent  shadow-md border border-gray-300 hover:shadow-lg rounded-md overflow-hidden relative`}
          >
            <div className=" w-full mx-auto">
              <img src={Esoft} alt="" className=" object-contain" />
            </div>
            <div className="eduChild absolute py-3 px-2 top-0 left-0 bg-[#ffffffb8] w-full">
              <h1 className=" w-full  text-center text-xs my-1 font-semibold">
                Diploma in English
              </h1>
              <p className=" text-xs text-gray-500 text-center">
                <span className=" font-medium"> ESOFT Metro Campus </span>
                <br />- October 2020 -
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
