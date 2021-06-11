import React, { useEffect, useState } from "react";
import Card from "./Card";
import shuffle from "./utilis/shuffle";
import "../style/Gamefield.scss";
import Modal from "./Modal";

const Controller = () => {
  let allCharacter = [
    "Alfie",
    "Arthur",
    "Tommy",
    "Campbell",
    "Curly",
    "Grace",
    "Jeremiah",
    "John",
    "Lizzie",
    "Luca",
    "Michael",
    "Polly",
    "Linda",
    "May",
    "Ada",
    "Finn",
    "Jessie",
    "Aberama",
    "Kimber",
    "Charles",
    "Mosley",
    "Hughes",
    "Tatiana",
    "Churchill",
    "Freddie",
    "Bonnie",
  ];

  const [currentCard, setCurrentCard] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [round, setRound] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState(shuffle(allCharacter).slice(0, 4));
  const [modalVisible, setModalVisible] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameIsWon, setGameIsWon] = useState(false);

  const generateCards = () => {
    return cards.map((char) => {
      return <Card id={char} key={char} selectCard={selectCard} />;
    });
  };

  const selectCard = (e) => {
    setCurrentCard(e.target.alt);
  };

  const playRound = () => {
    if (selectedCards.includes(currentCard)) {
      gameOver();
      return;
    } else if (selectedCards.length === 4 * level - 1) {
      if (level === 5) {
        gameWon();
      } else {
        nextLevel();
      }
      return;
    } else {
      newRound();
    }
  };

  const newRound = () => {
    setRound(round + 1);
    setSelectedCards(selectedCards.concat(currentCard));
    setCards(shuffle(cards));
  };

  const gameOver = () => {
    setLevel(1);
    setGameIsOver(true);
    setModalVisible(true);
  };

  const gameWon = () => {
    setRound(round + 1);
    setGameIsWon(true);
    setModalVisible(true);
  };

  const nextLevel = () => {
    setRound(round + 1);
    setLevel(level + 1);
    setModalVisible(true);
    setTimeout(() => {
      prepareLevel();
    }, 3500);
  };

  const prepareLevel = () => {
    setModalVisible(false);
    setGameIsOver(false);
    setGameIsWon(false);
    setSelectedCards([]);
    setCurrentCard(null);
  };

  const restartGame = () => {
    prepareLevel();
    setRound(0);
    setLevel(1);
  };

  useEffect(() => {
    if (currentCard !== null) {
      setCurrentCard(null);
      playRound();
    }
  }, [currentCard]);

  useEffect(() => {
    const n = 4 * level;
    setCards(shuffle(allCharacter).slice(0, n));
  }, [level, gameIsOver]);

  useEffect(() => {
    if (bestScore < round) {
      setBestScore(round);
    }
  }, [round]);

  return (
    <div className="main">
      {modalVisible && (
        <Modal
          score={round}
          gameOver={gameIsOver ? true : false}
          gameWon={gameIsWon ? true : false}
          restartGame={restartGame}
        />
      )}
      <div className="gameInfo">
        <div className="level">Level {level}</div>
        <div className="score">
          <div>Score: {round}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </div>
      <div className="fieldContainer">
        <div className="gameField">{generateCards()}</div>
      </div>
    </div>
  );
};

export default Controller;
