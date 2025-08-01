import React from "react";
import prettyImg from "../assets/images/prettyTwo.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BeforeAndAfter = () => {
  return (
    <div className="bg-[#F6F1EB] py-10 px-10 w-full flex gap-10 items-center gap-3 justify-center border-b-[2.5px] border-gray-900">
      <div className="w-1/2">
        <div className="flex gap-3 items-center ">
          <div className="w-[10%]">
            <FaChevronLeft className="" />
          </div>
          <div className="w-[80%]">
            <img src={prettyImg} className="" alt="images" />
          </div>
          <div className="w-[10%]">
            <FaChevronRight className="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 w-1/2">
        <div className="mt-5 mb-4 text-4xl font-bold ">
          Before and After Transformation
        </div>
        <div>
          At LuxeDerm, we believe in the power of transformation. Our
          commitmment to enhancing natural beauty and confidence is exemplified
          through remarkable before and after results achieved by our clients.
        </div>
        <div>
          These images serve as a testament to the expertise and dedication of
          our team. We take pride in helping our clients achieve their achieve
          goals and unlock their true radiance.
        </div>

        <div className="flex gap-3 w-full justify-between">
          <div
            className="border-b-[10px] rounded-lg border-[2.5px] border-gray-900 p-3
          flex flex-col gap-2 w-[150px]"
          >
            <div className="font-bold text-4xl">10+</div>
            <div>Years of Experience</div>
          </div>
          <div
            className="border-b-[10px] rounded-lg border-[2.5px] border-gray-900 p-3
          flex flex-col gap-2 w-[150px]"
          >
            <div className="font-bold text-4xl">100+</div>
            <div>Expert Doctors</div>
          </div>
          <div
            className="border-b-[10px] rounded-lg border-[2.5px] border-gray-900 p-3
          flex flex-col w-[150px] gap-2"
          >
            <div className="font-bold text-4xl">5000+</div>
            <div>Happy Customers</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
