import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      author: "",
      message: "",
      sysAnswers: [],
      messages: [],
      count: 0,
      isVisible: true,
    };
  }

  clearInputs = () => {
    this.setState({
      author: "",
      message: "",
    });
  };
  sysAnswer = () => {
    this.setState((state) => ({
      sysAnswers: [
        ...state.sysAnswers,
        {
          id: state.id + 1,
          author: "system",
          text: "hello",
        },
      ],
    }));
    this.getCount();
  };
  addMessage = () => {
    this.setState((state) => ({
      messages: [
        ...state.messages,
        {
          id: state.id + 1,
          author: state.author,
          text: state.message,
        },
      ],
    }));
    this.getCount();
    this.clearInputs();
    setTimeout(this.sysAnswer, 1500);
  };

  getCount = () => {
    this.setState((state) => ({
      count: state.messages.length,
    }));
  };
  togle = () => {
    this.setState(() => ({
      isVisible: !this.state.isVisible,
    }));
  };
  changeAuthor = (event) => {
    this.setState(() => ({
      author: event.target.value,
    }));
  };
  changeText = (event) => {
    this.setState(() => ({
      message: event.target.value,
    }));
  };
  render() {
    const { messages, count, isVisible, author, message, sysAnswers } =
      this.state;
    return (
      <div className="container">
        <input
          value={author}
          onChange={this.changeAuthor}
          className="author"
          type="text"
          placeholder="enter ur name"
        />
        <input
          value={message}
          onChange={this.changeText}
          className="message"
          type="text"
          placeholder="enter ur message"
        />
        <button className="addMessageButton" onClick={this.addMessage}>
          добавить
        </button>
        <div className="counterContainer">сообщений в чате: {count}</div>
        {!isVisible && (
          <button className="showMessageButton" onClick={this.togle}>
            показать сообщения
          </button>
        )}
        {isVisible && (
          <button className="hideMessageButton" onClick={this.togle}>
            скрыть сообщения
          </button>
        )}
        {isVisible && (
          <div className="messagesContainer">
            {messages.map((message) => {
              return (
                <div key={message.id} className="messageContainer">
                  <h3 className="messageAuthor">{message.author}</h3>
                  <p className="messageText">{message.text}</p>

                  <hr />
                </div>
              );
            })}
            {sysAnswers.map((sysAnswer) => {
              return (
                <div key={sysAnswer.id} className="messageContainer">
                  <h3 className="messageAuthor">{sysAnswer.author}</h3>
                  <p className="messageText">
                    {sysAnswer.text}, {messages[messages.length - 1].author}!
                  </p>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>,
  document.getElementById("root")
);
