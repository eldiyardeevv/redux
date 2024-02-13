import axios from "axios";
import React, { useState } from "react";

const ToDo = () => {
  const [image, SetImage] = useState("");
  const [title, SetTitle] = useState("");
  const [price, SetPrice] = useState("");
  const TOKEN = `6367524268:AAGczhA09zhzkLv-CGxslxlatYWEUmwTVeU`;
  const CHAT_ID = `-1001978163967`;
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  let values = `заказ\n`;
  values += `${image}\n`;
  values += `${title}\n`;
  values += `${price}\n`;

  const setForm = async () => {
    let data = await axios.post(URL_API, {
      chad_id: CHAT_ID,
      parse_modal: "html",
      text: values,
    });
    console.log(data);
  };

  return (
    <div className="flex justify-center my-[50px]">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={setForm} class="space-y-6" action="#">
          <h5 class="text-xl font-medium text-center text-gray-900 dark:text-white">
            ADD TELEGRAM
          </h5>

          <div>
            <input
              onChange={(e) => SetImage(e.target.value)}
              type="text"
              name="text"
              id="text"
              placeholder="••••image••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => SetTitle(e.target.value)}
              type="text"
              name="text"
              id="text"
              placeholder="••••title••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <input
              onChange={(e) => SetPrice(e.target.value)}
              type="number"
              name="number"
              id="password"
              placeholder="••••price••••"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5"></div>
            </div>
          </div>
          <button
            onClick={() => setForm()}
            type="submit"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            TELEGRAM
          </button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300"></div>
        </form>
      </div>
    </div>
  );
};

export default ToDo;
