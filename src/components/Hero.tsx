import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";
import woman from "../assets/images/woman.png";
import arrowUp from "../assets/icons/arrow-down.png";
import arrowDown from "../assets/icons/arrow-up.png";
import star from "../assets/icons/star.png";
import { IoSearch } from "react-icons/io5";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import buttonContainerImg from "../assets/images/buttonContainer.png";

const imagesSide = [
  {
    id: 1,
    images: img1,
  },
  {
    id: 2,
    images: img2,
  },
  {
    id: 3,
    images: img3,
  },
  {
    id: 4,
    images: img4,
  },
];

function Hero() {
  return (
    <>
      <div className="flex relative font-garamond">
        <div
          className=" w-[50px] py-10 gap-3 items-center border-[2.5px] border-gray-900 
        justify-between flex flex-col bg-[#F6F1EB] "
        >
          <div>
            <img src={arrowDown} className="h-[200px]" alt="" />
          </div>
          <div>
            <FaInstagram className="text-gray-900 " />
          </div>
          <div>
            <FaTwitter className="text-gray-900 " />
          </div>
          <div>
            <FaFacebook className="text-gray-900 " />
          </div>
          <div>
            <img src={arrowUp} className="h-[200px]" alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className=" border-[2.5px] border-gray-900 border-l-0 border-b-0
           h-[300px] w-[150px] z-2 bg-[#C7AE86] flex pt-3 pl-3 font-bold text-lg"
          >
            <div className="flex text-[#343A32] gap-2 ">SoftGlow</div>
          </div>
          <div
            className="w-[400px] bg-[#F6F1EB] border-l-0 border-[2.5px]
           border-gray-900 h-[350px] flex flex-col gap-2 p-10"
          >
            <div>
              <FaQuoteLeft />
            </div>
            <div className="font-bold text-xl mt-5">
              Skin care isn't a luxury; it's your daily commitment to nurturing
              you runique beauty.
            </div>
            <div
              className="flex gap-2 items-center font-bold items-center cursor-pointer 
              justify-center mt-5 px-5 py-3
              bg-[#C7AE86] text-[#343A32] w-[200px] border-lg rounded-lg border-[5px]
              border-l-0 border-r-0 border-t-0 border-[#343A32]"
            >
              Get In Touch{" "}
              <span>
                <FaArrowRight />
              </span>
            </div>

            <div className="flex items-center  mt-8">
              {" "}
              {imagesSide.map((item) => (
                <div key={item.id} className="-ml-[10px]">
                  <img src={item.images} alt={"images"} className="w-10 h-10" />
                </div>
              ))}
              <div className="ml-2">500+ Happy Clients</div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-[#F6F1EB] top-0 bottom-[0px] 
        z-[-1]  left-[190px] mt-20 right-[0px] h-[220px] items-center flex  text-[#343A32]"
        >
          <div className="pl-[100px] font-bold text-5xl text-center w-[500px]">
            Window to Radiant Beauty and confidence
          </div>
        </div>
        <div
          className="absolute bg-[#F6F1EB] top-0 bottom-[0px] border-[2.5px] border-r-0
        border-gray-900 border-t-0 border-b-0 left-[800px] mt-20 right-[0px] h-[220px]"
        >
          <div className="flex flex-col py-2 items-center">
            <div>
              <img src={star} className="pt-5" alt="" />
            </div>
            <div className="-ml-20">
              <img src={star} className="w-10 h-10 " alt="" />
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-[200px] right-0
             border-2 border-gray-800 border-l-0 h-20 flex items-center justify-end gap-10 px-3"
        >
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">Blog</div>
          <div className="cursor-pointer">Contact Us</div>
          <div className="cursor-pointer">About Us</div>

          <div className="h-full border-l border-gray-800 flex items-center pl-3">
            <IoSearch className="w-8 h-8 cursor-pointer" />
          </div>
        </div>

        <div className="absolute flex bottom-1/3 mb-[80px] -ml-[5px] left-[150px]">
          <img src={buttonContainerImg} alt="" className="w-[140px]" />
        </div>
        <div
          className="absolute top-30 bottom-[0px] border-[2.5px] border-gray-900
         flex flex-end justify-center border-l-0 border-r-0  bg-[#E6C59C] 
        left-[450px] right-[0px] h-[350px]"
        >
          <img src={woman} alt="" className="h-[450px] -mt-[104px]" />
        </div>
      </div>

      {/* Bottom Tab */}
      <div
        className="flex justify-between font-bold text-2xl px-10 font-garamond 
        bg-[#F6F1EB] py-5 border-[2.5px] border-l-0 border-r-0 border-t-0 
        border-gray-900"
      >
        <div>
          Elevate <span className="text-[#936E4E]">Beauty</span>{" "}
        </div>
        <div>
          Elevate <span className="text-[#936E4E]">Confidence</span>{" "}
        </div>
        <div>
          Elevate <span className="text-[#936E4E]">Beauty</span>{" "}
        </div>
        <div>
          Elevate <span className="text-[#936E4E]">Confidence</span>{" "}
        </div>
      </div>
    </>
  );
}

export default Hero;
