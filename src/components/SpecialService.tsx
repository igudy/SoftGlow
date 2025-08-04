import services1 from "../assets/images/services1.png";
import services2 from "../assets/images/services2.png";
import services3 from "../assets/images/services3.png";
import services4 from "../assets/images/services4.png";

const sliderImg = [
  { id: 1, img: services1, title: "Facial Massage", name: "service-image1" },
  { id: 2, img: services2, title: "Hair Treatment", name: "service-image2" },
  {
    id: 3,
    img: services3,
    title: "Under Eye Treatment",
    name: "service-image3",
  },
  { id: 4, img: services4, title: "Hand Massage", name: "service-image4" },
];

const SpecialService = () => {
  return (
    <div className="bg-[#EBD5C8] py-10 px-4 md:px-10 w-full flex flex-col mx-auto gap-6 md:gap-10 items-center justify-center border-b-[2.5px] border-gray-900">
      <div className="mt-2 md:mt-5 mb-2 md:mb-4 text-2xl md:text-4xl font-bold text-center">
        Our Special Services
      </div>

      <div className="text-sm md:text-base text-center max-w-[600px]">
        Unlock exclusive beauty experiences with our limited-time promotions.
        Discover your path to radiant confidence.
        <br />
        <span className="inline-block md:flex justify-center mt-1">
          Explore now.
        </span>
      </div>

      <div className="w-full">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 md:pb-0 px-2 md:px-0">
          {sliderImg.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[250px] md:w-auto border-[2.5px] bg-[#F6F1EB] border-[#343A32] border-b-[9px] shadow-sm rounded-xl"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-auto object-cover"
              />
              <div className="h-[40px] flex items-center font-bold justify-center text-center px-2">
                {item.title}
              </div>
              <div className="mx-3">
                <div className="flex px-2 h-[1.5px] mb-3 bg-gray-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
