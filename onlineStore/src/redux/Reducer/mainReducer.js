import axios from "axios";
import { ADD_TO_BASKET, DEC_BASKET, DEL_BASKET, PRODUCT } from "../actionTypes";
let INITSTATE = {
  product: [],
  basket: JSON.parse(localStorage.getItem("bas")) || [],
  todo: JSON.parse(localStorage.getItem("create")) || [],
  search: ""
};

export const readProduct = async (dispatch) => {
  const url = await axios(`https://fakestoreapi.com/products`);
  const { data } = await url;
  dispatch({ type: PRODUCT, payload: data });
};
export const Reducer = (state = INITSTATE, action) => {
  switch (action.type) {
    case "SEARCH" : {
        return {...state, search: action.payload}
    }
    case "TODO": {
      state.todo.push(action.payload);
      break;
    }
    case PRODUCT: {
      return { ...state, product: action.payload };
    }
    case ADD_TO_BASKET: {
      let bas = state.basket.find((el) => el.id === action.payload.id);
      if (bas) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }],
        };
      }
    }
    case DEC_BASKET: {
      return {
        ...state,
        basket: state.basket.map((el) => {
          if (el.id === action.payload.id && el.count > 1) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        }),
      };
    }
    case DEL_BASKET: {
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
