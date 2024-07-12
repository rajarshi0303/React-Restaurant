import React from "react";

export default function SignatureDish() {
  return (
    <div>
      <div class="my-12 md:my-24 max-w-screen-xl mx-auto">
        <div class="mx-4 md:mx-0 flex flex-col md:flex-row items-center">
          <div class="relative md:left-14 w-full p-5 md:p-12 bg-white border-2 border-[#B49383] md:shadow-2xl shadow-stone-400">
            <h1 class="text-xl font-serif italic text-[#B49383] lg:text-xl">
              Something new
            </h1>
            <h1 class="text2xl tracking-tighter lg:text-4xl">
              Our Signature Dish
            </h1>
            <div class="mt-6 flex flex-col sm:text-center lg:text-left">
              <div class="flex ">
                <div class="flex-1 ">
                  <p class="text-xl text-gray-900 truncate text-wrap ">
                    Pork Tenderloin marinated in Green Pepper
                  </p>
                  <p class="mt-2 text-lg text-gray-500 truncate ">
                    Pork / Tenderloin / Green Pepper / Veggies
                  </p>

                  <div class="flex items-center mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        class="w-4 h-4 ms-1 text-[#B49383] dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>

                  <button
                    type="button"
                    class="py-2.5 px-8 mt-10 text-lg border-2 border-[#B49383] text-[#B49383] hover:bg-[#B49383] hover:text-white"
                  >
                    Order Now
                  </button>
                </div>
                <div class="items-start text-xl text-gray-900">$30</div>
              </div>
            </div>
          </div>
          <img
            class="order-first md:order-last h-auto md:max-w-2xl"
            src="/images/sig.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
