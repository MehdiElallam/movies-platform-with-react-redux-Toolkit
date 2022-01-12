import { configureStore } from "@reduxjs/toolkit";
import trendingMovies from "./slices/trendingMovies";
import topRatedMovies from "./slices/ratedMovies";
import categoriesOfMovies from "./slices/categoriesOfMovies"

const store =  configureStore({
    reducer: {
     trendingMovies,
     topRatedMovies,
     categoriesOfMovies
    },
    devTools : true
});

export default store;
   
