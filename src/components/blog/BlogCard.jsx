import React from "react";

export default function BlogCard({ url, title, author, date, details }) {
  return (
    <>
      <div class="h-auto max-w-full bg-white mx-4 md:mx-0 md:even:mt-16">
        <div>
          <div class="items-start">
            <a class="relative max-w-40 left-4 -bottom-7 block p-3 bg-white border-2 border-[#B49383] shadow-2xl shadow-stone-400">
              <h3 class="text-base text-center font-base ">{date}</h3>
            </a>
            <img class="h-auto max-w-full" src={url} alt="" />
          </div>
        </div>
        <div>
          <h5 class="mt-4 text-3xl tracking-tight text-gray-900 ">{title}</h5>
          <a class="mt-3 inline-flex items-center px-4 py-2 text-base text-center text-white bg-[#B49383]">
            {author} | In Lifestyle | 2 comments
          </a>
          <p class="mt-6 font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
        </div>
      </div>
    </>
  );
}
