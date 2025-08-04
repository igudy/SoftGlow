import prettyImg from "../assets/images/prettyTwo.png";

const BeforeAndAfter = () => {
  return (
    <div className="bg-[#F6F1EB] py-10 px-4 md:px-10 w-full flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center border-b-[2.5px] border-gray-900">
      {/* Image Slider Section */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center mx-auto justify-center gap-2 md:gap-3">
          {/* <button className="w-[10%] flex justify-center">
            <FaChevronLeft className="text-xl md:text-2xl" />
          </button> */}
          <div className="w-[90%]">
            <img
              src={prettyImg}
              className="w-full h-auto rounded-lg shadow-md"
              alt="Before and after transformation"
            />
          </div>
          {/* <button className="w-[10%] flex justify-center">
            <FaChevronRight className="text-xl md:text-2xl" />
          </button> */}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col space-y-4 md:space-y-6 w-full md:w-1/2">
        <h2 className="mt-2 md:mt-5 mb-2 md:mb-4 text-2xl md:text-4xl font-bold text-center md:text-left">
          Before and After Transformation
        </h2>

        <p className="text-sm md:text-base text-center md:text-left">
          At LuxeDerm, we believe in the power of transformation. Our commitment
          to enhancing natural beauty and confidence is exemplified through
          remarkable before and after results achieved by our clients.
        </p>

        <p className="text-sm md:text-base text-center md:text-left">
          These images serve as a testament to the expertise and dedication of
          our team. We take pride in helping our clients achieve their goals and
          unlock their true radiance.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 w-full justify-between mt-4">
          <div
            className="border-b-[8px] md:border-b-[10px] rounded-lg border-[2px] md:border-[2.5px] 
            border-gray-900 p-2 md:p-3 flex flex-col gap-1 md:gap-2 items-center text-center"
          >
            <div className="font-bold text-2xl md:text-4xl">10+</div>
            <div className="text-xs md:text-sm">Years of Experience</div>
          </div>

          <div
            className="border-b-[8px] md:border-b-[10px] rounded-lg border-[2px] md:border-[2.5px] 
            border-gray-900 p-2 md:p-3 flex flex-col gap-1 md:gap-2 items-center text-center"
          >
            <div className="font-bold text-2xl md:text-4xl">100+</div>
            <div className="text-xs md:text-sm">Expert Doctors</div>
          </div>

          <div
            className="border-b-[8px] md:border-b-[10px] rounded-lg border-[2px] md:border-[2.5px] 
            border-gray-900 p-2 md:p-3 flex flex-col gap-1 md:gap-2 items-center text-center"
          >
            <div className="font-bold text-2xl md:text-4xl">5000+</div>
            <div className="text-xs md:text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfter;
