import React from "react";

export default function SignatureDishes() {
  return (
    <div>
      <hr class="text-[#B49383] border-3" />
      <div class="mt-20 mb-16">
        <div class="mx-auto max-w-screen-xl">
          <div class="">
            <h2 class="text-xl tracking-tighter italic text-[#B49383] lg:text-3xl">
              Something new
            </h2>
          </div>

          <div class="mb-6 md:mb-7">
            <h2 class="text-xl tracking-tighter font-base text-gray-800 md:mb-6 lg:text-5xl">
              Our Signature Dishes
            </h2>
          </div>
        </div>
      </div>

      <section class="mx-auto max-w-screen-xl px-4 md:px-8">
        <DishCard
          url="images/sig_1.jpg"
          item="Pork Tenderloin marinated in Green Pepper"
          seasoning="Pork / Tenderloin / Green Pepper / Veggies"
          rating={4}
          price={29}
        />
        <DishCard
          url="images/sig_2.jpg"
          item="Beef Tartar with forest mushroms"
          seasoning="Pork / Tenderloin / Green Pepper / Veggies"
          rating={5}
          price={34}
        />
        <DishCard
          url="images/sig_3.jpg"
          item="Beef Steak with sauted vegetables"
          seasoning="Pork / Tenderloin / Green Pepper / Veggies"
          rating={4}
          price={21}
        />
      </section>
    </div>
  );
}

function DishCard({ url, item, seasoning, rating, price }) {
  return (
    <>
      <div class=" mb-8 flex flex-col justify-between md:mb-16 md:gap-16 lg:flex-row">
        <div class="mt-10 flex flex-col sm:text-center lg:text-left xl:w-1/2">
          <div class="flex justify-between">
            <div>
              <p class="text-xl text-wrap md:text-2xl text-gray-900 truncate ">
                {item}
              </p>
              <p class="mt-2 text-lg md:text-xl text-gray-500 truncate ">
                {seasoning}
              </p>
              <div className="flex items-center mt-4">
                {Array.from({ length: rating }, (_, i) => (
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
            <div class="inline-flex items-start text-2xl text-gray-900">
              ${price}
            </div>
          </div>
        </div>
        <div class="order-first md:order-last h-52 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-72 xl:w-1/2">
          <img
            src={url}
            loading="lazy"
            alt="Photo by Fakurian Design"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}
