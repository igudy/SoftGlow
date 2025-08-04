import { FaCheck } from "react-icons/fa";
import before1 from "../assets/images/before1.png";
import before2 from "../assets/images/before2.png";
import before3 from "../assets/images/before3.png";

const avatar = [
  {
    id: 1,
    img: before1,
    service: "Professional",
    desc: "Glowing Skin Membership",
    pt1: "Monthly Facial Treatment",
    pt2: "Priority appointment scheduling",
    pt3: "10% discount on skincare products",
    idealFor:
      "Clients looking for regular skincare maintenance and occasional makeup service",
    price: "199",
  },
  {
    id: 2,
    img: before2,
    service: "Professional",
    desc: "Glowing Skin Membership",
    pt1: "Monthly Facial Treatment",
    pt2: "Priority appointment scheduling",
    pt3: "10% discount on skincare products",
    idealFor:
      "Clients looking for regular skincare maintenance and occasional makeup service",
    price: "199",
  },
  {
    id: 3,
    img: before3,
    service: "Professional",
    desc: "Glowing Skin Membership",
    pt1: "Monthly Facial Treatment",
    pt2: "Priority appointment scheduling",
    pt3: "10% discount on skincare products",
    idealFor:
      "Clients looking for regular skincare maintenance and occasional makeup service",
    price: "199",
  },
];

const SpecialOffers = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col space-y-6 w-full px-10 pb-10">
        <div className="mt-5 mb-4 text-4xl font-bold mx-auto text-center">
          Before and After Transformation
        </div>
        <div className="mx-auto text-center max-w-2xl">
          Unlock exclusive beauty experiences with our limited-time promotions.
          Discover your path to radiant confidence. Explore now.
        </div>

        <div className="flex gap-8 pb-10 w-full justify-center">
          {avatar.map((item) => (
            <div
              className={`border-b-[20px] rounded-t-full border-[3px] border-gray-900
              flex flex-col gap-4 w-[300px] 
              ${
                item.id === 0 || item.id === avatar.length - 1 ? "-mb-10" : ""
              }`}
              key={item.id}
            >
              <img
                src={item.img}
                alt={item.desc}
                className="h-[250px] w-full object-cover rounded-t-full"
              />
              <div className="p-2">
                <div className="text-xl font-semibold">{item.service}</div>
                <div className="text-md mt-3">{item.desc}</div>

                {/* Horizontal Line */}

                <div className="mt-3">
                  <div className="flex px-2 h-[1.5px] mb-3 bg-gray-900"></div>
                </div>

                {/* Horizontal Line Ending */}

                <div className="flex gap-2 text-[14px] my-2 items-center">
                  <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />
                  {item.pt1}
                </div>

                <div className="flex gap-2 text-[14px] my-2 items-center">
                  <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />
                  {item.pt2}
                </div>

                <div className="flex gap-2 text-[14px] items-center">
                  <FaCheck className="bg-[#C7AE86] p-1 rounded-lg shadow-sm" />
                  {item.pt3}
                </div>

                <div className="flex gap-2 items-start mt-5 text-[14px]">
                  <div>
                    <span className="font-bold">Ideal For: </span>
                    <span className="whitespace-normal">{item.idealFor}</span>
                  </div>
                </div>

                {/* Horizontal Line */}

                <div className="mt-3">
                  <div className="flex px-2 h-[1.5px] mb-3 bg-gray-900"></div>
                </div>

                {/* Horizontal Line Ending */}

                <div className="text-3xl flex-col font-bold flex justify-center items-center">
                  ${item.price}
                  <div
                    className="flex mt-6 gap-2 items-center font-bold items-center cursor-pointer 
                    justify-center py-2 px-3 bg-[#C7AE86] text-[#343A32] w-[150px] text-sm border-lg rounded-lg border-[5px]
                    border-l-0 border-r-0 border-t-0 border-[#343A32]"
                  >
                    Get In Touch <span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
