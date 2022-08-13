import React, { useCallback, useEffect , useState } from "react";
import Card from "../../components/Card";
import style from '../../styles/mania.module.scss'

const Mania = () => {

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
    const [input, setInput] = useState('')

  const API_ENDPOINT = "https://www.breakingbadapi.com/api/characters";
  
  useEffect(() => {
    loadUser();
  }, []);
  
  const loadUser =  async () => {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    setValues(data)
  }

  const filterCharacter = values.filter((character) => {
    return character.name.toLowerCase().includes(input.toLowerCase())
})


 

  return <div className={style.container}>
    <div className={style.input_field}>
        <input type="text"  placeholder="search..."  onChange={(e) => setInput(e.target.value)} value={input}/>
       
    </div>
    <div className={style.card_container}>
        {filterCharacter.map((character) => {
            return <Card character={character}  key={character.char_id}/>
        })}
    </div>
  </div>
};

export default Mania;
