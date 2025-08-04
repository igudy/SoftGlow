import { FaCheck } from "react-icons/fa";
import before1 from "../assets/images/before1.png";
import before2 from "../assets/images/before2.png";
import before3 from "../assets/images/before3.png";

const avatar = [
  {
    id: 1,
    img: before1,
    service: "Starter",
    desc: "Glow-Up Essentials",
    pt1: "Quarterly facial treatments",
    pt2: "Basic appointment support",
    pt3: "Free skin consultation",
    idealFor: "New clients taking their first step to glowing skin",
    price: "99",
  },
  {
    id: 2,
    img: before2,
    service: "Premium",
    desc: "Radiant Skin Deluxe Package",
    pt1: "Monthly facials + peel",
    pt2: "Priority appointment scheduling",
    pt3: "10% off all services",
    idealFor: "Clients serious about consistent skincare & pampering",
    price: "249",
  },
  {
    id: 3,
    img: before3,
    service: "Elite",
    desc: "Ultimate Glam Membership",
    pt1: "Bi-weekly advanced facials",
    pt2: "Same-day booking access",
    pt3: "Free makeup on birthdays",
    idealFor: "Beauty lovers looking for premium, all-inclusive treatments",
    price: "399",
  },
];

const SpecialOffers = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-10">
      <div className="flex flex-col space-y-4 md:space-y-6 w-full pb-6 md:pb-10">
        <h2 className="mt-3 md:mt-5 mb-2 md:mb-4 text-2xl md:text-4xl font-bold mx-auto text-center">
          Special Offers
        </h2>
        <p className="mx-auto text-center text-sm md:text-base max-w-2xl">
          Unlock exclusive beauty experiences with our limited-time promotions.
          Discover your path to radiant confidence. Explore now.
        </p>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 w-max md:w-full pb-6">
            {avatar.map((item) => (
              <div
                key={item.id}
                className={`
                  border-b-[12px] md:border-b-[20px] rounded-t-full border-[2px] md:border-[3px] border-gray-900
                  flex flex-col gap-3 md:gap-4 w-[280px] md:w-full flex-shrink-0 bg-white shadow-md 
                 
                `}
              >
                <img
                  src={item.img}
                  alt={item.desc}
                  className="h-[200px] md:h-[250px] w-full object-cover rounded-t-full"
                />
                <div className="p-3 md:p-4">
                  <div className="text-lg md:text-xl font-semibold">
                    {item.service}
                  </div>
                  <div className="text-sm md:text-md mt-2 md:mt-3">
                    {item.desc}
                  </div>

                  <div className="mt-2 md:mt-3">
                    <div className="h-[1px] md:h-[1.5px] bg-gray-900"></div>
                  </div>

                  <div className="flex gap-2 text-xs md:text-sm my-1 md:my-2 items-start">
                    <FaCheck className="bg-[#C7AE86] p-[2px] md:p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
                    <span>{item.pt1}</span>
                  </div>

                  <div className="flex gap-2 text-xs md:text-sm my-1 md:my-2 items-start">
                    <FaCheck className="bg-[#C7AE86] p-[2px] md:p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
                    <span>{item.pt2}</span>
                  </div>

                  <div className="flex gap-2 text-xs md:text-sm items-start">
                    <FaCheck className="bg-[#C7AE86] p-[2px] md:p-1 rounded-lg shadow-sm flex-shrink-0 mt-1" />
                    <span>{item.pt3}</span>
                  </div>

                  <div className="flex gap-2 items-start mt-3 md:mt-5 text-xs md:text-sm">
                    <div>
                      <span className="font-bold">Ideal For: </span>
                      <span>{item.idealFor}</span>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-3">
                    <div className="h-[1px] md:h-[1.5px] bg-gray-900"></div>
                  </div>

                  <div className="text-2xl md:text-3xl font-bold flex flex-col items-center mt-4 md:mt-6">
                    ${item.price}
                    <button
                      className="flex gap-2 items-center font-bold cursor-pointer 
                    justify-center py-2 px-3 bg-[#C7AE86] text-[#343A32] w-full md:w-[150px] 
                    text-xs md:text-sm rounded-lg border-b-[3px] md:border-b-[5px] border-[#343A32]
                    hover:bg-[#936E4E] hover:text-white transition-colors mt-3"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
