import React, { useEffect , useState } from "react";
import Card from "../../components/Card";
import style from '../../styles/mania.module.scss'

const mania = () => {

    // const initialValues = {
    //     img : '',
    //     name : '',
    //     nickName : '',
    //     status : '',
    //     portrayed : '',
    //     character_id :null ,
    //     occupation : []
    // }
    
    const [values, setValues] = useState([])

  const API_ENDPOINT = "https://www.breakingbadapi.com/api/characters";

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    setValues(data)
  };

  // console.log(values);

  return <div className={style.container}>
    <div className={style.input_field}>
        <input type="text"  placeholder="search..."/>
    </div>
    <div className={style.card_container}>
        {values.map((character) => {
            return <Card character={character}  key={character.char_id}/>
        })}
    </div>
  </div>
};

export default mania;
