import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers.js/authReducer";
import ProductsReducer from "./reducers.js/ProductsReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: ProductsReducer
    }
})

export default store