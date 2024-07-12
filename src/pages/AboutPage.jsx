import React from "react";

import Heading from "../components/layout/Heading";
import AboutSection from "../components/about/AboutSection";
import Chefs from "../components/about/Chefs";
import Testimonials from "../components/about/Testimonials";
import ReservationForm from "@/components/forms/ReservationForm";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Heading url="public/images/about.jpg" title="About us" />
      <AboutSection />
      <Chefs />
      <Testimonials />
      <ReservationForm />
      <Footer />
    </>
  );
}
