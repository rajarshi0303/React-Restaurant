import React from "react";

export default function AboutSection() {
  return (
    <>
      <div class="my-12 md:my-24 max-w-screen-xl mx-auto">
        <div class="flex flex-col md:flex-row items-center justify-center md:-space-x-24 md:rtl:space-x-reverse">
          <img
            class="px-4 md:px-0 md:max-w-2xl border-2 border-white "
            src="/images/about_intro.jpg"
            alt=""
          />
          <a class="block mx-4 md:mx-0 md:max-w-xl p-4 md:p-12 bg-white border-2 border-[#B49383] md:shadow-2xl shadow-stone-400">
            <h3 class="mb-2 font-serif italic text-xl md:text-2xl font-base tracking-tight text-[#B49383] ">
              Something New
            </h3>
            <h2 class="mb-4 md:mb-6 text-3xl md:text-4xl font-base tracking-tight text-gray-900 ">
              An Extraordinery Experience
            </h2>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
              Ut non justo eleifend, facilisis nibh ut, interdum odio.
              Suspendisse potenti. Vivamus luctus diam eu neque rutrum, vitae
              aliquet dolor venenatis. Nulla consequat fringilla massa.
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
