import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readProduct } from "../../redux/Reducer/mainReducer";
import MenuCard from "./MenuCard";

const Menu = () => {
  const dispatch = useDispatch();
  const { product, todo } = useSelector((s) => s);
  // console.log(todo);

  useEffect(() => {
    readProduct(dispatch);
  }, []);

  return (
    <div className="flex flex-wrap justify-around py-5">
      {
        todo.map((el) => (
          <MenuCard el={el} />
        ))
      }
      {product.map((el) => (
        <MenuCard el={el} />
      ))}
    </div>
  );
};

export default Menu;
