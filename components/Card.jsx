import React from "react";
import style from "../styles/card.module.scss";
import Image from "next/image";
import Background from "../public/background/walter-white.jpg";

const Card = ({ character }) => {
    console.log(character);
  return (
    <div className={style.card}>
      <div className={style.container}>
        <Image src={Background} alt="Avatar" width="150" height="80" />
        <div className={style.content_wrapper}>
          <li>Name : {character.name}</li>
          <li>Nickname : {character.nickname}</li>
          <li>Portrayed : {character.portrayed}</li>
          <li>status : {character.status}</li>
            <div className={style.btn}>
            <button>View Full</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
