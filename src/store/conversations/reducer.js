import { CREATE_CONVERSATION, REMOVE_CONVERSATION } from "./types";
import { nanoid } from "nanoid";

const initialState = {
  conversations: [],
};

export const ConversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION: {
      return {
        ...state,
        conversations: [
          ...state.conversations,
          {
            name: action.payload,
            date: new Date(),
            id: nanoid(),
          },
        ],
      };
    }
    case REMOVE_CONVERSATION: {
      return {
        ...state,
        conversations: [
          ...state.conversations.filter(
            (conversation) => conversation.id !== action.payload
          ),
        ],
      };
    }
    default:
      return state;
  }
};
