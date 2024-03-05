import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

export default function Contact() {
  return (
    <div className=" w-11/12 sm:w-4/5 px-10 sm:px-16 mx-auto mt-32  border-t z-10 border-gray-500 py-5 sm:flex relative">
      <div className=" w-full  sm:pb-5 sm:pt-10 flex items-end sm:w-1/3">
        <div className="  space-y-3">
          <div className=" w-full flex  gap-4 items-center">
            <LiaFacebookSquare className=" size-8 text-gray-600 sm:size-7" />
            <p className=" text-xs text-gray-600">Mohamed Rimsan</p>
          </div>
          <div className=" w-full flex   gap-4 items-center">
            <FiGithub className=" size-6 text-gray-600 sm:size-5 mr-2" />
            <p className=" text-xs text-gray-600">Rimsan00</p>
          </div>
          <div className=" w-full flex gap-4 items-center">
            <SlSocialLinkedin className=" size-6 text-gray-600 sm:size-4 mr-3" />
            <p className=" text-xs text-gray-600">Mohamed Rimsan</p>
          </div>
        </div>
      </div>
      <div className=" sm:pb-5 flex items-end  w-full mt-4 sm:mt-0 sm:pt-10  sm:w-1/3">
        <div className="space-y-3">
          <div className=" w-full flex gap-4 items-center">
            <FaWhatsapp className=" mt-auto size-7 text-gray-600 sm:size-5" />
            <p className=" text-xs text-gray-600">+94 77 842 8878</p>
          </div>
          <div className=" w-full flex gap-4 items-center">
            <CiLocationOn className=" mb-auto size-7 text-gray-800 sm:size-5" />
            <p className=" text-xs text-gray-600">
              No,139,Mathrasa road, Mancholai, <br /> Oddamavadi, Vaalaichenai,
              Estern Province, <br /> Sri Lanka
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full sm:w-1/3">
        <h1 className=" w-full pt-5 px-5 text-gray-500">
          Get in Touch with <span className=" text-[#773ec2]">Me</span>
        </h1>

        <div className="  w-full  px-5 mx-auto sm:flex">
          <div className=" w-full ">
            <form action="#" className=" space-y-2">
              <input
                type="text"
                placeholder="Full Name"
                className=" w-full px-2 pb-1 border bg-[#ffffffb5] focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
              />
              <input
                type="email"
                placeholder="Email address"
                className=" w-full px-2 pb-1 border bg-[#ffffffb5] focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
              />
              <textarea
                type="text"
                rows={3}
                placeholder="Message"
                className=" w-full resize-none px-2 py-1 border bg-[#ffffffb5] focus:border-[#773ec2] hover:border-[#773ec2]  border-gray-400 outline-none text-sm rounded-md"
              />
              <button className=" pb-1 mb-2 w-full rounded-md bg-[#773ec2] text-white hover:bg-[#723fb4]">
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
