import React from "react";
import MenuCard from "./MenuCard";

export default function Menus() {
  const starter = {
    heading: "Starter",
    items: [
      {
        name: "Pork Tenderloin in Green Pepper",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 20,
      },
      {
        name: "Shrimp with Garlic",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 17,
      },
      {
        name: "Wild Mushroom with Chicken",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 12,
      },
      {
        name: "Oysters with Baked Potatoes",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 24,
      },
      {
        name: "Roast Pork",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 18,
      },
    ],
  };
  const main = {
    heading: "Main",
    items: [
      {
        name: "Chicken with Lemon",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 20,
      },
      {
        name: "Pork Tenderloin in Green Pepper",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 22,
      },
      {
        name: "Shrimp with Garlic",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 19,
      },
      {
        name: "Wild Mushroom with Chicken",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 27,
      },
      {
        name: "Oysters with Baked Potatoes",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 30,
      },
      {
        name: "Pork Tenderloin in Green Pepper",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 28,
      },
    ],
  };

  const desert = {
    heading: "Desert",
    items: [
      {
        name: "Lava Cake",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 9,
      },
      {
        name: "Orange Tart",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 7,
      },
      {
        name: "Cheese Cake",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 11,
      },
      {
        name: "Chocolatte Mausse",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 13,
      },
      {
        name: "Ice Cream",
        seasoning: "Pork,Tenderloin,Green Pepper",
        price: 10,
      },
    ],
  };

  return (
    <div>
      <div class="bg-white pb-6 sm:pb-10 mx-4 md:mx-0">
        <div class="mx-auto max-w-screen-xl">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 xl:gap-8">
            <MenuCard heading={starter.heading} items={starter.items} />
            <MenuCard heading={main.heading} items={main.items} />
            <MenuCard heading={desert.heading} items={desert.items} />
          </div>
        </div>
      </div>
    </div>
  );
}
