import React from "react";
import cretificate1 from "../img/cretificate1.PNG";
import cretificate2 from "../img/cretificate2.PNG";
import cretificate3 from "../img/cretificate3.PNG";
import cretificate4 from "../img/cretificate4.PNG";
import cretificate5 from "../img/cretificate5.PNG";
import cretificate6 from "../img/cretificate6.PNG";
import { useInView } from "react-intersection-observer";

export default function CourseCertifications() {
  const { ref, inView } = useInView({
    threshold: 0.25,
    // triggerOnce: true,
  });
  return (
    <div className={` w-11/12 sm:w-4/5 mx-auto sm:px-5 my-20`}>
      <h1 className=" w-full text-end text-gray-500 px-4 font-medium pb-5">
        <span className=" text-[#773ec2] ">| Courses</span> and Certifications
      </h1>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } w-11/12 sm:w-6/12 space-y-5 mx-auto mt-5`}
      >
        <div
          className={`w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate1}
                alt=""
                className=" object-cover w-full h-full border-r border-[#773ec2ab]"
              />
            </a>
          </div>
          <div className=" w-3/4 sm:px-5">
            <p className="   py-2 w-full text-center">
              Entry-Level Cybersecurity Training
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-500">
              Foundation for cybersecurity roles, covering threats, defenses,
              and risk management.
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4 sm:px-5">
            <p className="   py-2 w-full text-center">
              Penetration Testing and Ethical Hacking
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-500">
              Teaches how to identify and exploit vulnerabilities in IT systems.
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate2}
                alt=""
                className=" object-cover  w-full h-full border-l border-[#773ec2ab]"
              />
            </a>
          </div>
        </div>
        <div
          className={`w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate3}
                alt=""
                className=" object-cover  w-full h-full border-r border-[#773ec2ab]"
              />
            </a>
          </div>
          <div className=" w-3/4 sm:px-5">
            <p className="   py-2 w-full text-center">
              FCA - FortiGate 7.4 Operator Self-Paced
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-500">
              Learn to secure networks using FortiGate’s security and networking
              features.
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4 sm:px-5">
            <p className="  py-2 w-full text-center">
              FCF - Introduction to the Threat Landscape 2.0 Self-Paced
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-500">
              Overview of network threats and principles of cybersecurity.
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate4}
                alt=""
                className=" object-cover w-full h-full border-l border-[#773ec2ab]"
              />
            </a>
          </div>
        </div>
        <div
          className={`w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate5}
                alt=""
                className=" object-cover  w-full h-full border-r border-[#773ec2ab]"
              />
            </a>
          </div>
          <div className=" w-3/4 sm:px-5">
            <p className=" py-2 w-full text-center">
              FCP - Azure Cloud Security 7.4 Administrator Self-Paced
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-500">
              Learn to manage Azure cloud traffic with Fortinet solutions.
            </p>
          </div>
        </div>
        <div
          className={` w-full bg-[#ffffff]   border-2 border-[#773ec2ab]  flex shadow-md hover:shadow-lg rounded-lg overflow-hidden`}
        >
          <div className=" w-3/4 sm:px-5">
            <p className="  py-2 w-full text-center">
              Official ISC2 CC Online Self-Paced Training - 1M
            </p>
            <p className="sm:px-5 text-sm w-full  pb-3 text-center text-gray-400">
              Free training for entry-level cybersecurity roles and
              certification
            </p>
          </div>
          <div className=" w-2/4 sm:w-1/4">
            <a href="https://github.com">
              <img
                src={cretificate6}
                alt=""
                className=" object-cover  w-full h-full border-l border-[#773ec2ab]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
