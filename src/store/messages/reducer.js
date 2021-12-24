import { REMOVE_MESSAGES, SEND_MESSAGE, REMOVE_MESSAGE_BY_ID } from "./types";
import { nanoid } from "nanoid";

const initialState = {
  messages: {},
};

export const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            { ...action.payload.message, date: new Date(), id: nanoid() },
          ],
        },
      };
    case REMOVE_MESSAGES: {
      delete state.messages[action.payload.roomId];
      return { ...state };
    }
    case REMOVE_MESSAGE_BY_ID:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };

    default:
      return state;
  }
};
