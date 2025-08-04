import hand1 from "../assets/images/hand1.png";
import hand2 from "../assets/images/hand2.png";
import hand3 from "../assets/images/hand3.png";
import face1 from "../assets/images/face1.png";

const articles = [
  {
    image: face1,
    title:
      "Facial Rejuvenation: The Ultimate Guide to Face Massages and Eye Masks",
    desc: "Dive into the world of facial massage and the rejuvenating effects of eye masks. Discover how these skincare rituals can enhance your natural beauty, reduce puffiness, and promote a radiant complexion. Learn professional techniques you can do at home, recommended products, and how often you should perform these treatments for optimal results.",
    longDesc:
      "Facial massages have been used for centuries in various cultures to promote youthful skin. When combined with quality eye masks, they can dramatically reduce signs of fatigue and aging. This comprehensive guide covers everything from basic techniques to advanced methods used by estheticians. You'll learn about pressure points that help with lymphatic drainage, the best oils to use for your skin type, and how to incorporate these practices into your weekly routine for maximum benefits.",
  },
  {
    image: hand1,
    title: "Pamper Your Hands: The Art of Relaxing Hand Massages",
    desc: "Explore the therapeutic benefits of hand massages. From stress relief to improved blood flow – here's how a simple routine can elevate your self-care game.",
  },
  {
    image: hand2,
    title: "Hair Rejuvenation: Unlock the Secrets to Lustrous Locks",
    desc: "Get the low-down on scalp treatments and daily habits that keep hair strong, silky and vibrant. Say hello to shine, goodbye to dullness.",
  },
  {
    image: hand3,
    title: "Total Body Bliss: The Healing Power of Body Massages",
    desc: "Discover how full body massages not only relax tense muscles but also promote better sleep, immunity, and overall vitality.",
  },
];

const BeautyInsights = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto border-t-2 border-gray-900 bg-[#EBD5C8] px-12 py-12">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-semibold">
            Beauty and Wellness Insights
          </h2>
          <button className="px-8 py-2 rounded-lg border-2 bg-[#EBD5C9] border-b-[12px] border-gray-900 hover:bg-gray-100 transition">
            See All
          </button>
        </div>

        {/* MAIN CONTENT LAYOUT */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* LEFT (MAIN) ARTICLE */}
          <div className="md:w-1/2 border bg-[#F6F1EB] border-gray-900 border-b-[12px] rounded-2xl flex flex-col">
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full h-64 object-cover rounded-t-2xl mb-6"
            />
            <div className="p-3">
              <h3 className="font-semibold text-xl mb-4">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 mb-4">{articles[0].longDesc}</p>
              <button className="mt-auto px-5 py-2 rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 transition self-start">
                Continue Reading →
              </button>
            </div>
          </div>

          {/* RIGHT (3 SMALLER) ARTICLES */}
          <div className="md:w-1/2 flex flex-col justify-between gap-6">
            {articles.slice(1, 4).map((item, index) => (
              <div
                key={index}
                className="border bg-[#F6F1EB] border-gray-900 border-b-[9px] rounded-2xl flex h-[180px]"
              >
                <div className="w-[180px] flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-l-2xl"
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {item.desc}
                  </p>
                  <button className="mt-auto text-sm font-medium text-gray-700 hover:underline self-start">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeautyInsights;
