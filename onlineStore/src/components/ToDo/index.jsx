import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ToDo = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const { todo } = useSelector((s) => s);

  const createTodo = () => {
    // e.preventDefault();
    let obj = {
      image: img,
      title: title,
      description: null,
      price: price,
    };
    localStorage.setItem("create", JSON.stringify([...todo, {...obj}]))
    dispatch({ type: "TODO", payload: obj });
  };

  return (
    <div className="flex justify-center align-center mt-[100px]">
      <div className="w-[400px] text-center  h-[300px] bg-[#181818]">
        <h1 className="py-[20px] text-white text-[30px]">ToDo</h1>
        <form onSubmit={createTodo}>
          <div>
            <input
              onChange={(e) => setImg(e.target.value)}
              className=" w-[220px] h-[30px]"
              type="text"
            />
          </div>
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="my-[20px] w-[220px] h-[30px]"
              type="text"
            />
          </div>
          <div>
            <input
              onChange={(e) => setPrice(e.target.value)}
              className=" w-[220px] h-[30px]"
              type="text"
            />
          </div>
          <button
            onClick={() => createTodo()}
            type="button"
            className="text-white mt-[30px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            create
          </button>
        </form>
      </div>
      {/* {todo.map((el) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={el.image} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {el.title}
            </h5>
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {el.price}$
          </a>
        </div>
      </div>
      ))} */}
    </div>
  );
};

export default ToDo;
