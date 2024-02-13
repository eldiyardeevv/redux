import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_BASKET } from "../../../redux/actionTypes";
import { BsBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuCard = ({ el }) => {
  const dispatch = useDispatch();
  const { basket, search } = useSelector((s) => s);
  let bas = basket.some((some) => some.id === el.id);
  const addToBasket = () => {
    localStorage.setItem(
      "bas",
      JSON.stringify([...basket, { ...el, count: 1 }])
    );

    dispatch({ type: ADD_TO_BASKET, payload: el });
  };
  return el.title.includes(search) ? (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-[100%] h-[60%]" src={el.image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {el.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.description}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {el.price}$
        </a>
        {bas ? (
          <Link to={"/basket"}>
            <button
              onClick={() => addToBasket()}
              type="button"
              className="mx-[20px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <BsBasketFill />
            </button>
          </Link>
        ) : (
          <button
            onClick={() => addToBasket()}
            type="button"
            className="mx-[20px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Basket
          </button>
        )}
      </div>
    </div>
  ) : (
    ""
  );
};

export default MenuCard;
