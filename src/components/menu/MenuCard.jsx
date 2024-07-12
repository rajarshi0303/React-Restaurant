import React from "react";

export default function MenuCard({ heading, items }) {
  return (
    <div>
      <div class="w-full max-w-md p-4 bg-white border-2 border-gray-200 hover:shadow-2xl sm:p-8">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-3xl tracking-tighter border-2 p-3 border-[#B49383] leading-none text-[#B49383]">
            {heading}
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item, index) => (
              <li key={index} class="py-3 sm:py-4">
                <div class="flex ">
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate ">
                      {item.name}
                    </p>
                    <p class="text-xs font-medium text-gray-500 truncate ">
                      {item.seasoning.split(",").join(" / ")}
                    </p>
                    <p class="text-base mt-2 text-[#B49383] truncate ">
                      Order Now
                    </p>
                  </div>
                  <div class="inline-flex items-start text-base text-gray-900">
                    ${item.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
