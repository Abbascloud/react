import { SEND_MESSAGE, REMOVE_MESSAGES, REMOVE_MESSAGE_BY_ID } from "./types";

export const sendMessage = (message, roomId, delay = 500) => ({
  type: SEND_MESSAGE,
  payload: { message, roomId },
  meta: {
    delay,
  },
});
export const removeMessages = (roomId) => ({
  type: REMOVE_MESSAGES,
  payload: { roomId },
});
export const removeMessageById = (messageId, roomId) => ({
  type: REMOVE_MESSAGE_BY_ID,
  payload: { roomId, messageId },
});
