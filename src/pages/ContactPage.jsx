import React from "react";
import Heading from "@/components/layout/Heading";
import ContactDetails from "@/components/contact/ContactDetails";
import ReservationForm from "@/components/forms/ReservationForm";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div>
      <Heading url="public/images/contact.jpg" title="Contact Us" />
      <ContactDetails />
      <ReservationForm />
      <Footer />
    </div>
  );
}
