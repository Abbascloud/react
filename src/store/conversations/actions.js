import { CREATE_CONVERSATION, REMOVE_CONVERSATION } from "./types";

export const createConversation = (chatName) => {
  return { type: CREATE_CONVERSATION, payload: chatName };
};
export const RemoveConversation = (id) => {
  return { type: REMOVE_CONVERSATION, payload: id };
};
