import React from "react";
import "../style/Card.scss";

const Card = ({ id, selectCard }) => {
  const getImg = (id) => {
    const imgSrc = {
      Alfie: require("../imgs/Alfie.jpg").default,
      Arthur: require("../imgs/Arthur.jpg").default,
      Campbell: require("../imgs/Campbell.jpg").default,
      Curly: require("../imgs/Curly.jpg").default,
      Grace: require("../imgs/Grace.jpg").default,
      Jeremiah: require("../imgs/Jeremiah.jpg").default,
      John: require("../imgs/John.jpg").default,
      Lizzie: require("../imgs/Lizzie.jpg").default,
      Luca: require("../imgs/Luca.jpg").default,
      Michael: require("../imgs/Michael.jpg").default,
      Polly: require("../imgs/Polly.jpg").default,
      Tommy: require("../imgs/Tommy.jpg").default,
      Jessie: require("../imgs/Jessie.jpg").default,
      Aberama: require("../imgs/Aberama.jpg").default,
      Kimber: require("../imgs/Kimber.jpg").default,
      Charles: require("../imgs/Charles.jpg").default,
      Mosley: require("../imgs/Mosley.jpg").default,
      Hughes: require("../imgs/Hughes.jpg").default,
      Linda: require("../imgs/Linda.jpg").default,
      May: require("../imgs/May.jpg").default,
      Ada: require("../imgs/Ada.jpg").default,
      Finn: require("../imgs/Finn.jpg").default,
      Tatiana: require("../imgs/Tatiana.jpg").default,
      Churchill: require("../imgs/Churchill.jpg").default,
      Freddie: require("../imgs/Freddie.jpg").default,
      Bonnie: require("../imgs/Bonnie.jpg").default,
    };

    return <img className="cardImg" src={imgSrc[id]} alt={id} />;
  };

  return (
    <div
      id={id}
      onClick={(e) => {
        selectCard(e);
      }}
      className={`card`}
    >
      <div className="cardTitle">{id}</div>
      {getImg(id)}
    </div>
  );
};

export default Card;
