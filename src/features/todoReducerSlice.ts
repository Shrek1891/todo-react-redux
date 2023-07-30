import {RootState} from "../../store.ts";

export const selectTodo = (state: RootState) => state.todo;
export const listOfTask = (state: RootState) => state.todo;