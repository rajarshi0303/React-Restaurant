import React from "react";
import Heading from "@/components/layout/Heading";
import MenuDescription from "@/components/menu/MenuDescription";
import Menus from "@/components/menu/Menus";
import SignatureDishes from "@/components/menu/SignatureDishes";
import ReservationForm from "@/components/forms/ReservationForm";
import Footer from "@/components/layout/Footer";

export default function MenuPage() {
  return (
    <div>
      <Heading url="public/images/menu.jpg" title="The Menu" />
      <MenuDescription />
      <Menus />
      <SignatureDishes />
      <ReservationForm />
      <Footer />
    </div>
  );
}
