import React from "react";
import BannerSection from "../components/core/BannerSection";
import AboutSection from "../components/core/AboutSection";
import ServiceSection from "../components/core/ServiceSection";
import GallerySection from "../components/core/GallerySection";
import FeatureSection from "../components/core/FeatureSection";
import SectorSection from "../components/core/SectorSection";
import Clients from "../components/core/Clients";
import ContactSection from "../components/core/ContactSection";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <ServiceSection />
      <GallerySection />
      <FeatureSection />
      <SectorSection />
      <div className="md:block hidden">
        <Clients />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
