import twoImg from "../assets/images/twoPics.png";
import { FaCheck } from "react-icons/fa";

const FirstSection = () => {
  return (
    <div className="bg-[#F6F1EB] py-10 px-10 w-full flex gap-10 items-center justify-center border-b-[2.5px] border-gray-900">
      <div className="w-1/2">
        <img src={twoImg} alt="images" />
      </div>
      <div className="flex flex-col space-y-6 w-1/2">
        <div className="font-bold text-4xl">Our Journey at LuxeDem</div>
        <div>
          At LuxeDem, we're dedicated to enhancing your natural beauty and
          boosting self confidence. Founded by experienced professionals, our
          commitment to excellence has made us a trusted destination for
          skincare, makeup and wellness
        </div>

        <div className="flex gap-2 items-center">
          <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />{" "}
          <span className="font-bold">Years of Experience: </span>Benefit from
          our years of industry experience.
        </div>

        <div className="flex gap-2 items-center">
          <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />{" "}
          <span className="font-bold">Commitment to Excellence: </span>Benefit
          from our years of industry experience.
        </div>

        <div className="flex gap-2 items-center mb-10">
          <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />{" "}
          <span className="font-bold">Personalized Beauty Experience: </span>
          Benefit from our years of industry experience.
        </div>

        <div
          className="flex gap-2 items-center font-bold items-center cursor-pointer 
              justify-center py-2 px-3
              bg-[#C7AE86] text-[#343A32] w-[150px] text-sm border-lg rounded-lg border-[5px]
              border-l-0 border-r-0 border-t-0 border-[#343A32]"
        >
          Get In Touch <span></span>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
