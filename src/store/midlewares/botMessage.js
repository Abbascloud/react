import { sendMessage } from "../messages";
import { SEND_MESSAGE } from "../messages/types";

export const botMessage = (store) => (next) => (action) => {
  const state = store.getState();
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === state.profile.firstName
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "Bot", message: "Hello from Bot" },
          action.payload.roomId
        )
      );
    }, 1500);
  }

  return next(action);
};
