import {
  FiArrowRight,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#FAF7F2] text-[#1C1C1C] text-sm font-light">
      {/* Subscribe Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-3 sm:mb-4">
          <span className="text-xl">✨</span>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Subscribe To Receive Exclusive{" "}
            <span className="hidden sm:inline">
              <br />
            </span>
            <span className="font-bold">News & Offers</span>
          </h2>
        </div>
        <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
          Be the first to know about the biggest stories as they break
        </p>

        <form className="flex max-w-md mx-auto rounded overflow-hidden border border-gray-900 border-b-[6px]">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 text-sm sm:text-base focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 flex items-center justify-center hover:bg-[#1E2A21] transition-colors"
          >
            <FiArrowRight size={18} />
          </button>
        </form>

        <p className="text-xs sm:text-[10px] text-gray-500 mt-2 sm:mt-3 px-2 sm:px-0">
          By clicking Subscribe, you indicate that you agree to LuxeDerm's Terms
          and Conditions and Data Use Privacy Policy
        </p>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        {/* Brand */}
        <div className="text-lg font-semibold">LuxeDerm</div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <a href="#" className="hover:text-[#2C3D30] hover:underline">
            Services
          </a>
          <a href="#" className="hover:text-[#2C3D30] hover:underline">
            Blog
          </a>
          <a href="#" className="hover:text-[#2C3D30] hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:text-[#2C3D30] hover:underline">
            About Us
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-300 py-4 px-4 sm:px-6 text-center text-xs flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-2 sm:gap-0">
        <p>© 2025 LuxeDerm. All rights reserved.</p>
        <div className="flex gap-4 text-gray-600">
          <FiInstagram
            className="cursor-pointer hover:text-[#2C3D30] transition-colors"
            size={16}
          />
          <FiTwitter
            className="cursor-pointer hover:text-[#2C3D30] transition-colors"
            size={16}
          />
          <FiYoutube
            className="cursor-pointer hover:text-[#2C3D30] transition-colors"
            size={16}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
