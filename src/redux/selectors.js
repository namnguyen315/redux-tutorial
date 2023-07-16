
// export const todoListSelector = (state) => {
    //   const searchText = searchTextSelector(state);
    //   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.toLowerCase().includes(searchText.toLowerCase());
//   });
//   return todosRemaining;
// };
import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusFilterSlector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priority;
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSlector,
  prioritiesSelector,
  (todoList, searchText, status, priority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
              priority.includes(todo.priority)
          : todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
