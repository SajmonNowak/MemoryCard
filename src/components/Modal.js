import React from "react";
import "../style/Modal.scss";
import "../style/Loader.scss";

const Modal = ({ gameWon, gameOver, score, restartGame }) => {
  const gameOverMessage = () => {
    return (
      <div>
        <p className="gameOver"> Game Over</p>
        <p className="points">{score} Points</p>
        <p className="gameOverMessage">{getMessage()}</p>
        <button className="btn" onClick={() => restartGame()}>
          Restart
        </button>
      </div>
    );
  };

  const nextLevelMessage = () => {
    return (
      <div>
        <p className="gameOver">Level Up</p>
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {getRandomQuote()}
      </div>
    );
  };

  const getMessage = () => {
    let message;
    switch (true) {
      case score < 3:
        message = "You can do better than that.";
        break;
      case score < 6:
        message = "Try harder!";
        break;
      case score < 10:
        message = "Not bad!";
        break;
      case score < 14:
        message = "Impressive.";
        break;
      case score < 20:
        message = "You are a true peaky Blinder.";
        break;
    }
    return message;
  };

  const getRandomQuote = () => {
    const quotes = [
      {
        quote: "Don’t **** with the Peaky Blinders",
        name: "Polly Gray",
      },
      {
        quote:
          "Whisky’s good proofing water. Tells you who’s real and who isn’t.",
        name: "Tommy Shelby",
      },
      {
        quote: "By order of the Peaky Blinders.",
        name: "Arthur Shelby",
      },
      {
        quote:
          "Who wants to be in heaven when you can be sending men to f****** hell?",
        name: "Arthur Shelby",
      },
      {
        quote:
          "No fighting. No f****** fighting. No fighting. NO F****** FIGHTING!",
        name: "Thomas Shelby",
      },
      {
        quote: "Do I look like a man, who wants a simple life",
        name: "Thomas Shelby",
      },
      {
        quote: "Men always tell their troubles to a barmaid.",
        name: "Grace Burgess",
      },
    ];
    const randomNumber = Math.floor(Math.random() * 7);
    let quote1 = quotes[randomNumber];
    return (
      <div className="gameOverMessage">
        <p>{quote1.quote}</p>
        <p className="quoteName"> - {quote1.name} - </p>
      </div>
    );
  };

  const gameWonMessage = () => {
    return (
      <div>
        <p className="gameOver">You WIN!</p>
        <p className="gameOverMessage">
          You have the memory of a true peaky Blinder
        </p>
        <p className="gameOverMessage">Peaky Blinders never forget!</p>
        <button className="btn" onClick={() => restartGame()}>
          Restart
        </button>
      </div>
    );
  };

  if (gameOver) {
    return <div className="modal">{gameOverMessage()}</div>;
  } else if (gameWon) {
    return <div className="modal">{gameWonMessage()}</div>;
  } else {
    return <div className="modal">{nextLevelMessage()}</div>;
  }
};

export default Modal;
