import { useStyles } from "./message_styles";

export const Message = ({ messageData }) => {
  const styles = useStyles();

  const checkAuthor = (message) => {
    if (message.author === "System") {
      return styles.systemMessage;
    } else {
      return styles.userMessage;
    }
  };
  return (
    <div className={checkAuthor(messageData)}>
      <h3>{messageData.author}</h3>
      <p>{messageData.text}</p>
      <p>01 01 2000</p>
    </div>
  );
};
