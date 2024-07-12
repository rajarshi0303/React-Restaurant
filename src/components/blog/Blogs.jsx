import React from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
  return (
    <div>
      <div class="m-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-screen-xl mx-auto">
        <BlogCard
          url="/images/blog_1.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="June 18,2018"
        />
        <BlogCard
          url="/images/blog_2.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="Auguest 18,2019"
        />
        <BlogCard
          url="/images/blog_3.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="September 1,2019"
        />
        <BlogCard
          url="/images/blog_4.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="June 18,2018"
        />
        <BlogCard
          url="/images/blog_5.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="December 5,2019"
        />
        <BlogCard
          url="/images/blog_6.jpg"
          title="Our Nomenee at the Restaurants Awards"
          author="By George Smith"
          details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti."
          date="March 3,2018"
        />
      </div>
      <button class="flex mb-16 text-xl mx-auto px-6 py-3 text-white border-2 border-[#B49383] bg-[#B49383] hover:text-[#B49383] hover hover:bg-white">
        Load More
      </button>
    </div>
  );
}
