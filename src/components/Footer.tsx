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
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <span className="text-xl">✨</span>
          <h2 className="text-xl md:text-2xl font-semibold">
            Subscribe To Receive Exclusive <br className="hidden md:block" />
            <span className="font-bold">News & Offers</span>
          </h2>
        </div>
        <p className="text-gray-700 mb-6">
          Be the first to know about the biggest stories as they break
        </p>

        <form className="flex max-w-md mx-auto rounded overflow-hidden border border-gray-300">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#2C3D30] text-white px-4 flex items-center justify-center"
          >
            <FiArrowRight />
          </button>
        </form>

        <p className="text-[10px] text-gray-500 mt-2">
          By clicking Subscribe, you indicate that you agree to Figma’s Terms
          and Conditions and Data Use Privacy Policy
        </p>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="text-lg font-semibold">LuxeDerm</div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-300 py-4 px-4 text-center text-xs flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p>© 2025 Figments, Agency. All rights reserved.</p>
        <div className="flex gap-4 text-gray-600 mt-2 md:mt-0">
          <FiInstagram className="cursor-pointer" />
          <FiTwitter className="cursor-pointer" />
          <FiYoutube className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
