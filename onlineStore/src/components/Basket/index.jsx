import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
  const { basket } = useSelector((s) => s);

  return basket.length === 0 ? (
    <div className="flex justify-center mt-[20px]">
      <div
        className="flex w-[1000px] items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert"
      >
        <svg
          class="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Warning alert!</span> Change a few things up
          and try submitting again.
        </div>
      </div>
    </div>
  ) : (
    <div class="relative flex justify-center overflow-x-auto">
      <table class="w-[1000px] text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Image
            </th>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              count
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              actions
            </th>
          </tr>
        </thead>
        <tbody>
          {basket.map((el) => (
            <BasketCard el={el} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
