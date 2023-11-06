import { createStore } from "redux";
import studentsReducer from "./reducers/studentsReducer";
export const store = createStore(studentsReducer);
