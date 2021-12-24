import { useStyles } from "./message_styles";
import { format } from "date-fns";
import Button from "@mui/material/Button";

import { removeMessageById } from "../../../store/messages";

export const Message = ({ messageData, dispatch, roomId }) => {
  const styles = useStyles();

  const removeMessage = () => {
    dispatch(removeMessageById(messageData.id, roomId));
  };

  const checkAuthor = (message) => {
    if (message.author === "Bot") {
      return styles.systemMessage;
    } else {
      return styles.userMessage;
    }
  };
  return (
    <div className={checkAuthor(messageData)}>
      <h3>{messageData.author}</h3>
      <p>{messageData.message}</p>
      <p>{format(new Date(messageData.date), "yyyy-MM-dd HH:MM:SS")}</p>
      <Button onClick={removeMessage} variant="contained">
        Remove message
      </Button>
    </div>
  );
};
