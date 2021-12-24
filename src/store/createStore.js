import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ProfileReducer } from "./profile";
import { ConversationsReducer } from "./conversations";
import { MessagesReducer } from "./messages";
import { logger, botMessage, timeSchaduler } from "./midlewares";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  profile: ProfileReducer,
  conversations: ConversationsReducer,
  messages: MessagesReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReduser,
  compose(
    applyMiddleware(logger, botMessage, timeSchaduler, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);
