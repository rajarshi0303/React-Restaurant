import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Gough",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntvel a animi veritatis amet impedit iure, repudiandae voluptate qui eius facere iste corporis! Ex, fuga vero? Explicabo beatae tenetur omnis. Labore quod dolorem ex praesentium.",
    },
    {
      name: "Rama Raju",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntvel a animi veritatis amet impedit iure, repudiandae voluptate qui eius facere iste corporis! Ex, fuga vero? Explicabo beatae tenetur omnis. Labore quod dolorem ex praesentium.",
    },
    {
      name: "Kamam Puri",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntvel a animi veritatis amet impedit iure, repudiandae voluptate qui eius facere iste corporis! Ex, fuga vero? Explicabo beatae tenetur omnis. Labore quod dolorem ex praesentium.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-96 md:h-[30rem]"
        style={{ backgroundImage: "url('public/images/testimonials.jpg')" }}
      >
        <div class="flex items-center justify-center w-full h-full">
          <div class="text-center mt-10">
            <h1 class="font-serif italic text-[#B49383] text-3xl">
              What They Say
            </h1>
            <h1 class="mt-3 text-2xl tracking-tighter lg:text-5xl">
              Testimonials
            </h1>

            <figure class="max-w-screen-md mx-auto text-center">
              <svg
                class="w-5 h-5 mx-auto mt-6 mb-3 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>

              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <blockquote>
                        <p class="text-base italic font-medium text-gray-900 dark:text-white">
                          "{testimonial.message}"
                        </p>
                      </blockquote>
                      <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                        <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                          <cite class="pe-3 font-medium text-gray-900 dark:text-white">
                            {testimonial.name}
                          </cite>
                        </div>
                      </figcaption>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
