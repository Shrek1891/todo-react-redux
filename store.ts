import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {todo} from "./src/features/todoReducer.ts";

//import todoReducer from 'features/Todo/todoSlice';


const rootReducer = combineReducers({
     todo: todo

});

export const store = configureStore({
    reducer: rootReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
