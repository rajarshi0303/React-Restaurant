import React from "react";

export default function Chefs() {
  return (
    <div>
      <div class="bg-white mx-auto max-w-screen-xl">
        <div class="mx-5">
          <div class="mb-4 md:mb-7">
            <h1 class="text-xl font-serif italic text-[#B49383] lg:text-2xl">
              Something New
            </h1>
            <h2 class="text-3xl font-base text-gray-800 md:mb-6 lg:text-5xl">
              Meet the Chefs
            </h2>
          </div>

          <div class="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            <p class="md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla.
            </p>

            <p class="md:text-lg">
              Sit amet, consectetur adipiscing elit. Donec malesuada lorem
              maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula
              sapien. Suspendisse cursus faucibus finibus. Ut non justo
              eleifend, facilisis nibh ut, interdum odio. Suspendisse potenti.
              Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
              venenatis. Nulla consequat fringilla.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-white py-4 md:py-8">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <ChefCard
              url="images/chef_1.jpg"
              name="Maria Smith"
              designation="Top Chef"
            />
            <ChefCard
              url="images/chef_2.jpg"
              name="Maria Smith"
              designation="Top Chef"
            />
            <ChefCard
              url="images/chef_3.jpg"
              name="Maria Smith"
              designation="Top Chef"
            />
            <ChefCard
              url="images/chef_4.jpg"
              name="Maria Smith"
              designation="Top Chef"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChefCard({ url, name, designation }) {
  return (
    <>
      <div>
        <a href="#" class="group mb-2 block h-96 overflow-hidden lg:mb-3">
          <img
            src={url}
            loading="lazy"
            alt="Photo by Austin Wade"
            class="h-full w-full object-contain object-center"
          />
        </a>
        <div class="flex flex-col">
          <h2 class="text-center tracking-tighter text-xl text-gray-700">
            {name}
          </h2>
          <p class="text-center text-gray-500">{designation}</p>
          <a class="mt-4 w-24 p-2 mx-auto text-base text-center text-white bg-[#B49383] hover:shadow-2xl hover:scale-105">
            See More
          </a>
        </div>
      </div>
    </>
  );
}
