import React from "react";

export default function MenuDescription() {
  return (
    <div>
      <div class="bg-white mt-16 px-4 md:px-0">
        <div class="mx-auto max-w-screen-xl">
          <div class="">
            <h2 class="text-center text-2xl tracking-tighter italic text-[#B49383] lg:text-3xl">
              Something new
            </h2>
          </div>

          <div class="mb-6 md:mb-7">
            <h2 class="text-center text-3xl tracking-tighter font-base text-gray-800 md:mb-6 lg:text-5xl">
              Discover Our Menu
            </h2>
          </div>

          <div class="grid gap-4 md:gap-8 sm:grid-cols-2">
            <p class="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla.
            </p>

            <p class="text-lg">
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

      <div class="bg-white py-14 px-4 md:px-0">
        <div class="mx-auto max-w-screen-xl">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:gap-8">
            <a class="group relative flex h-60 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img
                src="/images/starters.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <a class="group relative flex h-60 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img
                src="/images/main.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <a class="group relative flex h-64 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
              <img
                src="/images/deserts.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
