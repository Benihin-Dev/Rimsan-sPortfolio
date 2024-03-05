import React from "react";
import { useInView } from "react-intersection-observer";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbCloudLockOpen } from "react-icons/tb";
import { GiCyberEye } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { DiLinux } from "react-icons/di";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { SiJavascript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { TbFileTypePhp } from "react-icons/tb";

export default function KSkill() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    // triggerOnce: true,
  });
  return (
    <div className=" w-11/12 sm:w-4/5 sm:px-5 mb-20 mx-auto">
      <h1 className=" mt-4 w-full font-semibold text-gray-500">
        <span className="px-4 text-[#773ec2] ">| MY</span>SKILLS
      </h1>
      <p className=" px-4 text-gray-500 text-xs ">
        i do all kind of neat stuff
      </p>
      <div
        ref={ref}
        className={`animated-component ${
          inView ? "is-visible" : ""
        } grid grid-cols-2 my-10 sm:grid-cols-3 px-3 lg:px-10 gap-4`}
      >
        <div className=" py-5">
          <SiMicrosoftsqlserver className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Networking Fundamentals</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            I understood how computer networks work, including the architecture
            used to design networks
          </p>
        </div>
        <div className=" py-5">
          <TbCloudLockOpen className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Network Security</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            Protecting the underlying networking infrastructure from
            unauthorized access, misuse, or theft.
          </p>
        </div>
        <div className=" py-5">
          <GiCyberEye className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Cybersecurity Concepts</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            How to protect individual and organization systems, applications,
            computing devices and more.
          </p>
        </div>
        <div className=" py-5">
          <GrCloudComputer className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Cloud Computing fundamentals</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            Eliminates the need for individuals and businesses to self-manage
            physical resources and only pay for what we use.
          </p>
        </div>
        <div className=" py-5">
          <DiLinux className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Kali Linux</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            How to use standard tools, configurations, and automation, allowing
            the user to focus on the task that needs to be completed.
          </p>
        </div>
        <div className=" py-5">
          <VscGitPullRequestCreate className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">Wireframe Creation</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            The wireframe depicts the page layout or arrangement of the
            website’s content, including interface elements and navigational
            systems, and how they work together.
          </p>
        </div>
        <div className=" py-5">
          <PiFileHtmlBold className=" w-full text-center size-10 text-[#773ec2]" />
          <p className=" w-full text-center">HTML</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            How to use elements to label pieces of content, such as headings,
            paragraphs, links, etc.
          </p>
        </div>
        <div className=" py-5">
          <PiFileCssBold className=" w-full text-center size-10 text-[#773ec2]" />
          <p className=" w-full text-center">CSS</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
            How HTML elements will be displayed on screen, paper, or other
            media.
          </p>
        </div>
        <div className=" py-5">
          <SiJavascript className=" w-full text-center size-12 text-[#773ec2]" />
          <p className=" w-full text-center">JavaScript</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
          How to create dynamically updated content, control multimedia, animate images, and much more.
          </p>
        </div>
        <div className=" py-5">
          <TbFileTypePhp className=" w-full text-center size-10 text-[#773ec2]" />
          <p className=" w-full text-center">PHP</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
          How to use PHP to power everything from our blog to the most popular websites in the world.
          </p>
        </div>
        <div className=" py-5">
          <TbFileTypeSql className=" w-full text-center size-10 text-[#773ec2]" />
          <p className=" w-full text-center">SQL</p>
          <p className=" w-full text-gray-500 text-xs px-3 text-center">
          Accessing and manipulating databases. SQL can execute queries, retrieve data, insert, update, delete, create, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
