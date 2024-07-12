import React from "react";

export default function Footer() {
  return (
    <footer class="bg-black">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="grid grid-cols-2 gap-6 sm:gap-4 lg:grid-cols-4">
          <div>
            <a
              href="https://flowbite.com/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <div>
                <span class="self-center tracking-tight text-3xl font-base whitespace-nowrap text-white">
                  The Venue
                </span>
                <p class="tracking-[6.5px] uppercase text-sm text-white">
                  Restruant
                </p>
                <p class="mt-4 max-w-60 text-gray-400 text-sm">
                  Copyright ©2024 All rights reserved | This template is made
                  with by Colorlib
                </p>
              </div>
            </a>
          </div>
          <div class="col-span-2">
            <p class="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur reiciendis culpa nostrum fugiat sint. Magnam dolorem
              saepe enim officia dolorum nulla repellendus quisquam optio
              suscipit quos doloribus, maxime nostrum tempora!
            </p>
          </div>
          <div>
            <div class="flex flex-row">
              <h2 class="text-sm font-semibold text-white dark:text-white">
                Adress:-{" "}
              </h2>
              <h2 class="px-2 text-sm font-semibold text-white dark:text-white">
                481 Creekside Lane Avila CA 93424
              </h2>
            </div>
            <div class="flex flex-row">
              <h2 class="text-sm font-semibold text-white dark:text-white">
                Phone:-{" "}
              </h2>
              <h2 class="px-2 text-sm font-semibold text-white dark:text-white">
                +53 345 7953 32453
              </h2>
            </div>
            <div class="flex flex-row">
              <h2 class="text-sm font-semibold text-white dark:text-white">
                Email:-{" "}
              </h2>
              <h2 class="px-2 text-sm font-semibold text-white dark:text-white">
                yourmail@gmail
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
