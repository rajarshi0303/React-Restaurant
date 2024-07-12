import React from "react";
import { useState } from "react";

export default function ReservationForm() {
  const [formdata, setFormdata] = useState({ date: "", time: "", people: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formdata);
  }
  return (
    <div>
      <div
        class="w-full bg-center bg-cover h-[28rem]"
        style={{ backgroundImage: "url('/public/images/reservations.jpg')" }}
      >
        <div class="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div class="text-center mt-10">
            <h1 class="text-4xl text-[#B49383] ">5 Stars</h1>
            <h1 class="md:mb-10 text-2xl tracking-tighter text-white lg:text-6xl">
              Make A Reservation
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
                <div>
                  <input
                    name="date"
                    id="date"
                    type="date"
                    value={formdata.date}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-white bg-transparent border-2 border-[#B49383] [&::-webkit-calendar-picker-indicator]:invert "
                  />
                </div>
                <div>
                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formdata.time}
                    onChange={handleChange}
                    class="block w-full px-4 py-2 mt-2 text-white bg-transparent border-2 border-[#B49383] [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
                <div>
                  <select
                    id="people"
                    name="people"
                    value={formdata.people}
                    onChange={handleChange}
                    class="block w-full px-4 py-2 mt-2 text-white bg-gray-900/90 border-2 border-[#B49383]"
                  >
                    <option selected>2 Person</option>
                    <option value="3">3 Person</option>
                    <option value="4">4 Person</option>
                    <option value="5">5 Person</option>
                    <option value="6">6 Person</option>
                    <option value="8">8 Person</option>
                  </select>
                </div>
              </div>
              <div class="mt-8">
                <button class="px-6 py-3 text-white bg-[#B49383]">
                  Make Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
