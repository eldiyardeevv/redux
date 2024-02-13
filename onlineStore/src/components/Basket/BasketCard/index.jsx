import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_BASKET,
  DEC_BASKET,
  DEL_BASKET,
} from "../../../redux/actionTypes";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s);
  const addToBasket = () => {
    localStorage.setItem(
      "bas",
      JSON.stringify([{ ...el, count: el.count + 1 }])
    );

    dispatch({ type: ADD_TO_BASKET, payload: el });
  };
  const delBasket = () => {
    localStorage.setItem(
      "bas",
      JSON.stringify([...basket.filter((item) => item.id !== el.id)])
    );
    dispatch({ type: DEL_BASKET, payload: el });
  };
  const decBasket = () => {
    localStorage.setItem(
      "bas",
      JSON.stringify([
        ...basket.map((el) => {
          if (basket.id === el.id && el.count > 1) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        }),
      ])
    );
    dispatch({ type: DEC_BASKET, payload: el });
  };
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img src={el.image} width={150} alt="" />
      </th>
      <td class="px-6 py-4">{el.title}</td>
      <td class="px-6 py-4">
        <button
          onClick={() => decBasket()}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          -
        </button>
        <span className="mx-[20px]"> {el.count}</span>
        <button
          onClick={() => addToBasket()}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          +
        </button>
      </td>
      <td class="px-6 py-4">{Math.floor(el.price * el.count)}$</td>
      <td class="px-6 py-4">
        <button
          onClick={() => delBasket()}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BasketCard;
