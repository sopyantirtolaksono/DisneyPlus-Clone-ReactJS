import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    // middleware: [thunk, logger],
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;