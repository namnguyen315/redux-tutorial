// import { formatCountdown } from "antd/lib/statistic/utils";
// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filltersSlice from "../components/Filters/fillterSlice";
import todoListSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  reducer: {
    filters: filltersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
