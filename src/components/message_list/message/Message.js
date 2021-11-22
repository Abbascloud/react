export const Message = ({ message }) => {
  return (
    <div key={message.id}>
      <h3>{message.author}</h3>
      <p>{message.text}</p>
      <p>01 01 2000</p>
    </div>
  );
};
