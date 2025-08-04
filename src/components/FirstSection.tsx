import twoImg from "../assets/images/twoPics.png";
import { FaCheck } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div className="bg-[#F6F1EB] py-10 px-4 md:px-10 w-full flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center border-b-[2.5px] border-gray-900">
      <div className="w-full md:w-1/2 px-4 md:px-0">
        <img
          src={twoImg}
          alt="images"
          className="w-full h-auto max-w-[500px] mx-auto"
        />
      </div>

      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-1/2 px-4 md:px-0">
        <h2 className="font-bold text-2xl md:text-4xl text-center md:text-left">
          Our Journey at LuxeDem
        </h2>

        <p className="text-sm md:text-base text-center md:text-left">
          At LuxeDem, we're dedicated to enhancing your natural beauty and
          boosting self confidence. Founded by experienced professionals, our
          commitment to excellence has made us a trusted destination for
          skincare, makeup and wellness.
        </p>

        {/* Benefits List */}
        <div className="space-y-3 md:space-y-4">
          <div className="flex gap-2 items-start">
            <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
            <div>
              <span className="font-bold">Years of Experience: </span>
              Benefit from our years of industry experience.
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
            <div>
              <span className="font-bold">Commitment to Excellence: </span>
              Benefit from our years of industry experience.
            </div>
          </div>

          <div className="flex gap-2 items-start mb-6 md:mb-10">
            <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
            <div>
              <span className="font-bold">
                Personalized Beauty Experience:{" "}
              </span>
              Benefit from our years of industry experience.
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button
            className="flex gap-2 items-center font-bold cursor-pointer 
            justify-center py-2 px-3 bg-[#C7AE86] text-[#343A32] 
            w-full md:w-[150px] text-sm border-lg rounded-lg border-[5px]
            border-l-0 border-r-0 border-t-0 border-[#343A32]
            hover:bg-[#936E4E] hover:text-white transition-colors duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
