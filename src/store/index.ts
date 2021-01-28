import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {exampleReducer, ExampleState} from "./example";


const reducers = {
    example: exampleReducer
}


export type StoreState = {
    example: ExampleState
}


export const store = configureStore({
    devTools: true,
    reducer: combineReducers<StoreState>(reducers)
})

