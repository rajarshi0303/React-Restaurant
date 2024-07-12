import React from "react";
import HomeHero from "../components/home/HomeHero";
import AboutSection from "@/components/about/AboutSection";
import VideoSection from "@/components/home/VideoSection";
import SignatureDish from "@/components/home/SignatureDish";
import Menus from "@/components/menu/Menus";
import ReservationForm from "@/components/forms/ReservationForm";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <VideoSection />
      <SignatureDish />
      <div class="max-w-screen-xl mx-auto">
        <div class="mb-14 flex items-center justify-center w-full h-full">
          <div class="text-center">
            <h1 class="text-2xl font-serif italic text-[#B49383] lg:text-3xl">
              The Venue{" "}
            </h1>
            <h1 class="text-4xl lg:text-5xl">The Menu</h1>
          </div>
        </div>
      </div>
      <Menus />
      <ReservationForm />
      <Footer />
    </div>
  );
}
