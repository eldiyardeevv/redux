import {createStore} from "redux"
import { Reducer } from "./Reducer/mainReducer"
import { composeWithDevTools } from "redux-devtools-extension"

export const store = createStore(Reducer, composeWithDevTools())
