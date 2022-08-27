import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
	Boolean
);

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnchancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middlewares));

//root reducer
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnchancers
);

export const persistor = persistStore(store);
