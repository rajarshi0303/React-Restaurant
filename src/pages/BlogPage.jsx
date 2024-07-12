import React from "react";
import Heading from "@/components/layout/Heading";
import Blogs from "@/components/blog/Blogs";
import ReservationForm from "@/components/forms/ReservationForm";
import Footer from "@/components/layout/Footer";

export default function BlogPage() {
  return (
    <div>
      <Heading url="public/images/blog.jpg" title="Our Blog" />
      <Blogs />
      <ReservationForm />
      <Footer />
    </div>
  );
}
