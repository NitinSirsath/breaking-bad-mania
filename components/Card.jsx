import React from "react";
import style from "../styles/card.module.scss";
import Image from "next/image";

import Link from "next/link";

const Card = ({ character }) => {
//   console.log(character);
  return (
    <div className={style.card}>
      <div className={style.container}>
        <Image src={character.img} alt="Avatar" width="150" height="80" />
        <div className={style.content_wrapper}>
          <li>Name : {character.name}</li>
          <li>Nickname : {character.nickname}</li>
          {/* <li>Portrayed : {character.portrayed}</li> */}
          <li>status : {character.status}</li>
          <div className={style.btn}>
            <Link href={'/mania/' + character.char_id}><button>View Full</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
