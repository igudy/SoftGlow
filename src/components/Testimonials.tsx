import { FaQuoteLeft } from "react-icons/fa";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar2.png";
import avatar3 from "../assets/images/avatar3.png";

const avatar = [
  {
    id: 1,
    img: avatar1,
    text: "I've been a loyal client of LuxeDerm for years, and their skincare and makeup services are top-notch. It's my go-to place for beauty!",
    name: "Sarah K",
    serviceOffered: "Facial Massage",
  },
  {
    id: 2,
    img: avatar2,
    text: "I've been a loyal client of LuxeDerm for years, and their skincare and makeup services are top-notch. It's my go-to place for beauty!",
    name: "Micheala K",
    serviceOffered: "Facial Massage",
  },
  {
    id: 3,
    img: avatar3,
    text: "I've been a loyal client of LuxeDerm for years, and their skincare and makeup services are top-notch. It's my go-to place for beauty!",
    name: "Jessica M",
    serviceOffered: "Facial Massage",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#EBD5C8] py-10 md:py-[70px] px-4 md:px-10 mb-10 w-full border-b-[2.5px] border-gray-900">
      <div className="flex items-center gap-2 w-full">
        <FaQuoteLeft className="text-xl shrink-0" />
        <span className="flex text-xl md:text-2xl">Testimonials</span>
        <div className="h-[1.5px] bg-gray-900 flex-1" />
      </div>

      <div className="mt-12 md:mt-[100px] w-full pb-6">
        <div className="grid grid-cols-1 mx-auto md:grid md:grid-cols-3 gap-4 md:gap-6 w-max md:w-full">
          {avatar.map((item) => (
            <div
              key={item.id}
              className="border-[2.5px] relative p-4 md:p-6 mt-10 md:mt-0 border-b-[8px] border-gray-900 rounded-lg min-h-[280px] md:min-h-[300px] w-[280px] md:w-auto flex-shrink-0 flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-sm md:text-lg mt-12 md:mt-[50px]">
                  {item.text}
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="flex gap-2 items-baseline">
                  <span className="font-bold text-sm md:text-base">
                    {item.name} /
                  </span>
                  <span className="text-xs md:text-sm font-thin">
                    {item.serviceOffered}
                  </span>
                </div>
              </div>
              <img
                src={item.img}
                className="absolute left-0 w-[80px] md:w-[100px] ml-4 md:ml-7 -top-8 md:-top-[40px]"
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
