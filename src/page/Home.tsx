import Hero from "../components/Hero";
import FirstSection from "../components/FirstSection";
import SpecialService from "../components/SpecialService";
import BeforeAndAfter from "../components/BeforeAndAfter";
import Testimonials from "../components/Testimonials";
import SpecialOffers from "../components/SpecialOffers";
import Questions from "../components/Questions";
import BeautyInsights from "../components/BeautyInsights";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-garamond">
      <Hero />
      <FirstSection />
      <SpecialService />
      <BeforeAndAfter />
      <Testimonials />
      <SpecialOffers />
      <Questions />
      <BeautyInsights />
      <Footer />
    </div>
  );
};

export default Home;
