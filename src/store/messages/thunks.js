import { sendMessage } from "./actions";

export const sendBotMessageByThunk =
  (message, roomId) => async (dispatch, getState) => {
    const state = getState();
    dispatch(sendMessage(message, roomId));
    if (message.author === state.profile.firstName) {
      setTimeout(() => {
        dispatch(
          sendMessage(
            {
              author: "Bot",
              message: "Hello bot from thunk",
            },
            roomId
          )
        );
      }, 500);
    }
  };
