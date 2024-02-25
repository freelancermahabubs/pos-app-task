import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/cartSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};


const persitedCartReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {

    cart: persitedCartReducer,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);