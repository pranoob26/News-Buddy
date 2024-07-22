import { configureStore } from "@reduxjs/toolkit";
import Likeslice from "./Likeslice";
export const store = configureStore({
  reducer: {
    likes: Likeslice,
  },
});
// import { configureStore } from "@reduxjs/toolkit";
// import Likeslice from "./Likeslice";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, Likeslice);
// const store = configureStore({
//   reducer: {
//     likes: persistedReducer,
//   },
// });
// const persistor = persistStore(store);
// export { store, persistor };
